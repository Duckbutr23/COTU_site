
document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = `url(${randomBg})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";

  // Back to Top
  const topBtn = document.getElementById("backToTop");
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };
  topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Custom Cursor + Trail
  const cursor = document.getElementById("cursor");
  document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.top = e.clientY + "px";
    trail.style.left = e.clientX + "px";
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 300);
  });
});

// Parallax Scroll Effect
document.addEventListener("scroll", function () {
  const layer = document.getElementById("parallax-layer");
  const offset = window.pageYOffset;
  if (layer) {
    layer.style.transform = `translateY(${offset * 0.3}px) scale(1.5)`;
  }
});
// Theme Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.onclick = () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
};
document.body.classList.add("dark-theme"); // default on load

// Secret Key Sequence (HEX or 23)
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
