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
    if (keySequence.includes("gonzo")) {
      document.body.style.transform = "rotate(180deg)";
    }
    if (keySequence.includes("fringe")) {
      document.body.classList.toggle("fringe-mode");
    }
    if (keySequence.includes("void")) {
      document.body.classList.add("void-mode");
    }
    if (keySequence.includes("return")) {
      document.body.classList.remove("void-mode");
    }
  });

  // === FRINGE MODE BUTTON ===
  const fringeBtn = document.getElementById("fringeMode");
  if (fringeBtn) {
    fringeBtn.addEventListener("click", () => {
      document.body.classList.toggle("fringe-mode");
    });
  }
});

// === PARALLAX SCROLL EFFECT ===
document.addEventListener("scroll", function () {
  const layer = document.getElementById("parallax-layer");
  const offset = window.pageYOffset;
  if (layer) {
    layer.style.transform = `translateY(${offset * 0.3}px) scale(1.5)`;
  }
});

// === CLUCKERS ===
function summonCluckers() {
  const cluckers = document.getElementById("cluckers");
  if (!cluckers) return;

  cluckers.style.left = "-100px";
  cluckers.style.opacity = "1";

  setTimeout(() => {
    cluckers.style.left = "110%";
  }, 100);

  setTimeout(() => {
    cluckers.style.opacity = "0";
    cluckers.style.left = "-100px";
  }, 9000);
}

function cluckersLoop() {
  summonCluckers();
  const nextDelay = Math.floor(Math.random() * 120000) + 60000;
  setTimeout(cluckersLoop, nextDelay);
}

// === TEMPORAL GLITCH ===
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

  const glitchBox = document.getElementById("glitch-message");
  glitchBox.textContent = randomLog;
  glitchBox.style.opacity = "1";

  document.body.classList.add("temporal-glitch");

  setTimeout(() => {
    glitchBox.style.opacity = "0";
    document.body.classList.remove("temporal-glitch");
  }, 1600);
}


// === LOAD INITIALIZERS ===
window.addEventListener("load", () => {
  setTimeout(cluckersLoop, 5000);   // Start Cluckers after 5s
  setTimeout(glitchLoop, 10000);    // Start Temporal Glitch after 10s
});

const posterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("vhs-flicker");
      setTimeout(() => {
        entry.target.classList.remove("vhs-flicker");
      }, 1000);
    }
  });
}, {
  threshold: 0.5
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".destroy-poster, .gonzo-poster").forEach(poster => {
    posterObserver.observe(poster);
  });
});

// === GLITCH TITLE SHUFFLER ===
document.addEventListener("DOMContentLoaded", () => {
  const glitchText = document.querySelector('.glitch');
  if (glitchText) {
    const messages = [
      "ABOUT US",
      "ACCESSING COTU RECORDS...",
      "FILE DAMAGED",
      "WELCOME TO THE VOID",
      "404_UNSCRIPTED_MODE",
      "LOADING.EXE",
      "???",
      "ERROR: CITIZEN DATA LOST"
    ];
    let i = 0;

    setInterval(() => {
      glitchText.textContent = messages[i];
      i = (i + 1) % messages.length;
    }, 3000);
  }

  // === GHOST FRAGMENT GENERATOR ===
  const ghosts = [
    "fragment.recovered: /projects/eye.heart.zombie",
    "warning: 'Shifty Glances' actor ID mismatch",
    "trace[CARDERIA_SHIP_23]: signal lost",
    "Project: New Blood Productions - initiated",
    "ERROR: Illuminatus decryption incomplete",
    "404_GONZO_PHASE_3: unauthorized access",
    "note:// syndicate linked to [UNKNOWN]",
    "artifact.xxy? → ‘Little Green Zanni’ protocol"
  ];

  const chaosContainer = document.querySelector('.chaos-container');
  if (chaosContainer) {
    ghosts.forEach((ghost, index) => {
      const g = document.createElement('div');
      g.className = 'ghost-fragment';
      g.textContent = ghost;
      g.style.animationDelay = `${index * 4}s`;
      chaosContainer.appendChild(g);
    });
  }
});

