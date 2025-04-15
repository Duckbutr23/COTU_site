
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
    topBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
  };
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Custom Cursor Trail
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

  // Parallax
  const layer = document.getElementById("parallax-layer");
  document.addEventListener("scroll", () => {
    if (layer) {
      const offset = window.pageYOffset;
      layer.style.transform = `translateY(${offset * 0.3}px) scale(1.5)`;
    }
  });

  // Theme Toggle
  const themeBtn = document.getElementById("themeToggle");
  themeBtn.onclick = () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
  };
  document.body.classList.add("dark-theme");
});
