// src/components/RotatingTransmission.jsx
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * RotatingTransmission
 * - Randomizes message order on mount (Fisher–Yates)
 * - Optionally reshuffles after each full pass
 * - Slower crawl speeds
 *
 * You can pass a custom list via <RotatingTransmission messages={[...]} />
 * Otherwise it falls back to the defaults below.
 */
export default function RotatingTransmission({
  messages: incomingMessages,
  reshuffleEachLoop = true,     // set false to keep one random order per page load
}) {
  // Default list (edit or override with the prop)
  const DEFAULTS = useMemo(
    () => [
    "EYE. HEART. ZOMBIE.",
    "ILLUMINATUS!",
    "WONDERLAND",
    "DISTURBANCE...",
    "EDUCATION, LIVE!",
    "MUSKETEERS!",
    "SHERLOCK",
    "THE BROKEN MOUNTAIN",
    "THE SYNDICATE",
    "DUCK3U++ER INDUSTRIES",
    "OTHER SIDE OF RED",
    "RIPPED- FROM THE HEADLINES!",
    "BRAINSTORMS",
    "BARON MÜNCHHAUSEN",
    "ANARCHIST COOKBOOK",
    "ART OF WAR",
    "FAUST",
    "FRANKENSTEIN",
    "SILENCE",
    "NOSFERATU",
    "THE LAND OF THE PEOPLE WHO DO WHAT THEY WANT",
    "THE VALLEY OF AN EMPTY MIND",
    "THE LIFT",
    "LITTLE GREEN ZANNI",
    "SHADOWS OF THE RING",
    "0 to HERO!",
    "ROAD MYSTERIES & FITNESS",
    "THE PIGEON MAN & BUTT BLASTERS POWER HOUR!",
    "THEATRE 101 • 102 • 103",
    "COTU- Trials & Tribulations",
    "THE LONG GOODBYE",
    ],
    []
  );

  const source = incomingMessages && incomingMessages.length > 0 ? incomingMessages : DEFAULTS;

  // --- Shuffle helpers (stable across renders) ---
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Hold the current shuffled list in a ref so it doesn't reshuffle on every render
  const messagesRef = useRef(shuffle(source));

  // Start at a random index in the shuffled list
  const [msgIndex, setMsgIndex] = useState(() =>
    Math.floor(Math.random() * messagesRef.current.length)
  );
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // If the incoming list changes at runtime, reshuffle once
  useEffect(() => {
    messagesRef.current = shuffle(source);
    setMsgIndex(Math.floor(Math.random() * messagesRef.current.length));
    setDisplayText("");
    setIsDeleting(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source.join("|")]);

  // Crawl timing (slower)
  const TYPING_SPEED = 90;        // ms/char typing
  const DELETING_SPEED = 55;      // ms/char deleting
  const PAUSE_AFTER_TYPE = 1800;  // hold full message
  const PAUSE_AFTER_DELETE = 500; // break before next

  useEffect(() => {
    const list = messagesRef.current;
    const fullText = list[msgIndex] || "";
    let delay;

    if (!isDeleting) {
      // typing forward
      if (displayText.length < fullText.length) {
        delay = TYPING_SPEED;
        const timer = setTimeout(
          () => setDisplayText(fullText.slice(0, displayText.length + 1)),
          delay
        );
        return () => clearTimeout(timer);
      } else {
        // finished typing, pause then delete
        const timer = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        return () => clearTimeout(timer);
      }
    } else {
      // deleting
      if (displayText.length > 0) {
        delay = DELETING_SPEED;
        const timer = setTimeout(
          () => setDisplayText(fullText.slice(0, displayText.length - 1)),
          delay
        );
        return () => clearTimeout(timer);
      } else {
        // move to next (and maybe reshuffle when we loop)
        const next = (msgIndex + 1) % list.length;
        const timer = setTimeout(() => {
          if (next === 0 && reshuffleEachLoop) {
            messagesRef.current = shuffle(list); // new random order each loop
          }
          setIsDeleting(false);
          setMsgIndex(next);
        }, PAUSE_AFTER_DELETE);
        return () => clearTimeout(timer);
      }
    }
  }, [displayText, isDeleting, msgIndex]);

  return (
    <div className="mt-4 font-mono text-sm md:text-base tracking-wider flex items-baseline gap-2">
      {/* static green label */}
      <span className="font-bold text-emerald-400">Incoming transmission:</span>

      {/* animated text + cursor */}
      <span className="text-gray-300 whitespace-pre">
        {displayText}
        <span
          className="inline-block w-[1ch] bg-gray-400 ml-1 animate-pulse align-middle"
          style={{ height: "1em" }}
          aria-hidden="true"
        />
      </span>
    </div>
  );
}
