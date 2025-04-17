
document.addEventListener("DOMContentLoaded", function () {
  // === RANDOM BACKGROUND ===
  const backgrounds = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = `url(${randomBg})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";

  // === BACK TO TOP BUTTON ===
  const topBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    topBtn.style.display =
      document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
        ? "block"
        : "none";
  });
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === CUSTOM CURSOR + TRAIL ===
  const cursor = document.getElementById("cursor");
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";

    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.top = e.clientY + "px";
    trail.style.left = e.clientX + "px";
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 300);
  });

  // === THEME TOGGLE ===
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      document.body.classList.toggle("dark-theme");
    });
  }
  document.body.classList.add("dark-theme");

    // === SECRET KEY SEQUENCES ===
  let keySequence = "";
  document.addEventListener("keydown", (e) => {
    keySequence += e.key.toLowerCase();
    if (keySequence.length > 10) keySequence = keySequence.slice(-10);

    if (keySequence.includes("hex")) {
      alert("🔓 HEX override detected. Engaging hidden subroutine...");
    }
    if (keySequence.includes("23")) {
      alert("🧬 Portal 23 located. Activating anomaly scanner...");
    }
  });
});


// === PARALLAX SCROLL EFFECT ===
document.addEventListener("scroll", function () {
  const layer = document.getElementById("parallax-layer");
  const offset = window.pageYOffset;
  if (layer) {
    layer.style.transform = `translateY(${offset * 0.3}px) scale(1.5)`;
  }
});
const fringeBtn = document.getElementById("fringeMode");
if (fringeBtn) {
  fringeBtn.addEventListener("click", () => {
    document.body.classList.toggle("fringe-mode");
  });
}

function summonCluckers() {
  const cluckers = document.getElementById("cluckers");
  if (!cluckers) return;

  // Reset position & fade in
  cluckers.style.left = "-100px";
  cluckers.style.opacity = "1";

  // Start walk
  setTimeout(() => {
    cluckers.style.left = "110%"; // Walk across the screen
  }, 100);

  // Fade out after walk is done
  setTimeout(() => {
    cluckers.style.opacity = "0";
    cluckers.style.left = "-100px";
  }, 9000);
}

// Random delay between 1–3 mins
function cluckersLoop() {
  summonCluckers();
  const nextDelay = Math.floor(Math.random() * 120000) + 60000;
  setTimeout(cluckersLoop, nextDelay);
}

window.addEventListener("load", () => {
  setTimeout(cluckersLoop, 5000); // Start 5 seconds after page load
});

function runTemporalGlitch() {
  const logs = [
    "⚠ Timeline instability detected... stabilizing. ✅",
    "🔄 Rewinding scene fragment...",
    "🕳 Intermission Echo: /err_Stage23_Breach",
    "🔺 COTU_BACKLINE: Prop SCP-CLKR active.",
    "🧠 Log Memory Leak Detected: Eris→Δecho(4)",
    "🚨 Incomplete rehearsal loop. Injecting placeholder reality...",
    "⏳ Reality stuttered. Cue correction tape.",
    "🔒 HEX NODE 23 SEQUENCE INTERRUPTED.",
    "🕯 'She’s still dreaming, don’t wake her.'",
    "💤 Fragmented Dreamstate sealed. (for now)"
  ];

  const randomLog = logs[Math.floor(Math.random() * logs.length)];
  console.log(randomLog);

  document.body.classList.add("temporal-glitch");

  setTimeout(() => {
    document.body.classList.remove("temporal-glitch");
  }, 600);
}
