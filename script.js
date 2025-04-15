
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

// === SECRET KEY SEQUENCES UPGRADE ===
let keySequence = "";
document.addEventListener("keydown", (e) => {
  keySequence += e.key.toLowerCase();
  if (keySequence.length > 10) keySequence = keySequence.slice(-10);

  if (keySequence.includes("hex")) {
    triggerGlitch();
    setTimeout(() => {
      const panel = document.getElementById("hexPanel");
      if (panel) panel.style.display = "block";
    }, 400);
  }

  if (keySequence.includes("23")) {
    triggerGlitch();
    setTimeout(() => {
      const panel = document.getElementById("portalPanel");
      if (panel) panel.style.display = "block";
    }, 400);
  }
});

function triggerGlitch() {
  document.body.classList.add("glitching");
  setTimeout(() => document.body.classList.remove("glitching"), 500);
}


// === PARALLAX SCROLL EFFECT ===
document.addEventListener("scroll", function () {
  const layer = document.getElementById("parallax-layer");
  const offset = window.pageYOffset;
  if (layer) {
    layer.style.transform = `translateY(${offset * 0.3}px) scale(1.5)`;
  }
});
