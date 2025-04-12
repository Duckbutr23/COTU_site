
document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = ["bg1.jpg", "bg2.jpg"];
  const chosen = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = `url('${chosen}')`;
});
