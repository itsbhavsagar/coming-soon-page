// Create stars in the background
const starsContainer = document.querySelector(".stars");

// Generate stars
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";

  const size = Math.random() * 3 + 1; // Random size for stars
  star.style.width = size + "px";
  star.style.height = size + "px";

  // Positioning the star
  star.style.top = Math.random() * 100 + "vh"; // Random vertical position
  star.style.left = Math.random() * 100 + "vw"; // Random horizontal position

  // Random movement
  star.style.animationDuration = Math.random() * 2 + 1 + "s"; // Random twinkle speed
  star.style.animationDelay = Math.random() * 2 + "s"; // Random start delay

  starsContainer.appendChild(star);
}
