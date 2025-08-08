const typingText = document.querySelector('.typing');
const roles = [
  "Spring Boot Developer",
  "MERN Stack Developer 💻",
  "Open Source Contributor 🌐",
  "Problem Solver 🧠",
  "UI/UX Enthusiast 🎨",
  "Java & Node.js Developer 🔧"
];
let roleIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80); // typing speed
  } else {
    setTimeout(erase, 2000); // wait before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40); // erase speed
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500); // wait before next typing
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingText) {
    typingText.textContent = "";
    setTimeout(type, 1000);
  }
});
