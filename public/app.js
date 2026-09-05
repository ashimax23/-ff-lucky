let points = Number(localStorage.getItem("ff_points") || 0);

const pointsEl = document.getElementById("points");
const loginBtn = document.getElementById("loginBtn");
const startBtn = document.getElementById("startBtn");
const cards = document.querySelectorAll(".scratch-card");

function updatePoints() {
  pointsEl.textContent = points;
  localStorage.setItem("ff_points", points);
}

updatePoints();

loginBtn.addEventListener("click", () => {
  alert("Login / Register system will be connected in the next step.");
});

startBtn.addEventListener("click", () => {
  document.querySelector(".cards").scrollIntoView({
    behavior: "smooth"
  });
});

let scratched = 0;
let winningCard = Math.floor(Math.random() * cards.length);

cards.forEach((card, index) => {
  card.addEventListener("click", () => {

    if (card.dataset.scratched === "true") {
      return;
    }

    card.dataset.scratched = "true";
    scratched++;

    if (index === winningCard) {
      card.innerHTML = `
        <span>🎉</span>
        <small>+50 POINTS</small>
      `;

      points += 50;
      updatePoints();

      alert("🎉 Congratulations! You won 50 points!");
    } else {
      card.innerHTML = `
        <span>0</span>
        <small>BETTER LUCK!</small>
      `;

      alert("😅 No reward on this card.");
    }
  });
});
