// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import TheFuture from "./pages/TheFuture";
import ThePub from "./pages/ThePub";
import ThePast from "./pages/ThePast";
import CrewQuarters from "./pages/CrewQuarters";
import Enlist from "./pages/Enlist";
import Carderia from "./pages/Carderia";
import Market from "./pages/Market";
import ThePlan from "./pages/ThePlan";
import Transparency from "./pages/Transparency";
import Comix from "./pages/Comix";
import Pod from "./pages/Pod";
import Films from "./pages/Films";
import Education from "./pages/Education";
import Publish from "./pages/Publish";

import Read from "./pages/Read";
import Chapter from "./pages/Chapter";

import Navbar from "./components/Navbar";
import IntroVideoGate from "./components/IntroVideoGate";

const INTRO_KEY = "sb23-intro-seen";

export default function App() {
  // Show intro only if we haven't seen it yet (or if ?intro=1 is present)
  const [showIntro, setShowIntro] = useState(() => {
    try {
      const usp = new URLSearchParams(window.location.search);
      if (usp.get("intro") === "1") return true; // force show via query
      return localStorage.getItem(INTRO_KEY) !== "1"; // show when not seen
    } catch {
      return true;
    }
  });

  function finishIntro() {
    try {
      localStorage.setItem(INTRO_KEY, "1");
    } catch {
      // ignore storage failures
    }
    setShowIntro(false);
  }

  // While the intro is active, render ONLY the gate
  if (showIntro) {
    return (
      <div className="bg-black text-white min-h-screen font-sans">
        <IntroVideoGate
          src="/video/intro.mp4"               // adjust path/filename if needed
          poster="/video/starbase_poster1.jpg" // optional poster
          onDone={finishIntro}
        />
      </div>
    );
  }

  // Normal app once intro is finished or skipped
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-future" element={<TheFuture />} />
        <Route path="/the-pub" element={<ThePub />} />
        <Route path="/the-past" element={<ThePast />} />
        <Route path="/crew-quarters/:id?" element={<CrewQuarters />} />
        <Route path="/enlist" element={<Enlist />} />
        <Route path="/carderia" element={<Carderia />} />
        <Route path="/the-market" element={<Market />} />
        <Route path="/the-plan" element={<ThePlan />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/comix" element={<Comix />} />
        <Route path="/pod" element={<Pod />} />
        <Route path="/films" element={<Films />} />
        <Route path="/education" element={<Education />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/read" element={<Read />} />
        <Route path="/read/:slug" element={<Chapter />} />
        <Route path="*" element={<div className="p-8">Not found.</div>} />
      </Routes>
    </div>
  );
}
