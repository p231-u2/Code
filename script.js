const heroLine = "Happy Birthday, My Beautiful Love 💖";
const typewriterEl = document.getElementById("typewriter");
let charIndex = 0;

function typeWriter() {
  if (charIndex <= heroLine.length) {
    typewriterEl.textContent = heroLine.slice(0, charIndex);
    charIndex += 1;
    setTimeout(typeWriter, 60);
  }
}

typeWriter();

const modal = document.getElementById("wishModal");
const surpriseBtn = document.getElementById("surpriseBtn");
const closeModal = document.getElementById("closeModal");

function createConfetti() {
  const colors = ["#ff6fb5", "#ffd166", "#8d7dff", "#7cf5ff", "#ffffff"];

  for (let i = 0; i < 90; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    piece.style.width = `${6 + Math.random() * 7}px`;
    piece.style.height = piece.style.width;
    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 2200);
  }
}

surpriseBtn.addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  createConfetti();
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
});

const loveMessages = {
  "Your smile": "Your smile can fix even my hardest day.",
  "Your kindness": "You are gentle with everyone, and it inspires me.",
  "Your silly laugh": "That laugh is my favorite sound in the world.",
  "Your strength": "You face challenges with grace and courage.",
  "Your warm heart": "Being loved by you feels like home.",
  "Everything about you": "I choose you, in every lifetime, every day.",
};

const output = document.getElementById("reasonOutput");
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    output.textContent = loveMessages[chip.textContent] ?? "You are amazing.";
  });
});

const pages = [...document.querySelectorAll(".book-page")];
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
let pageIndex = 0;

function renderPage() {
  pages.forEach((page, index) => {
    page.classList.toggle("active", index === pageIndex);
  });

  prevBtn.disabled = pageIndex === 0;
  nextBtn.disabled = pageIndex === pages.length - 1;
}

prevBtn.addEventListener("click", () => {
  pageIndex = Math.max(0, pageIndex - 1);
  renderPage();
});

nextBtn.addEventListener("click", () => {
  pageIndex = Math.min(pages.length - 1, pageIndex + 1);
  renderPage();
});

renderPage();
