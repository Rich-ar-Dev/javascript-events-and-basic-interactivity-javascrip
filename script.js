// ==========================
// Part 1: Event Handling
// ==========================
document.getElementById("clickBtn").addEventListener("click", () => {
  document.getElementById("clickMessage").textContent = "Button was clicked!";
});

document.getElementById("nameInput").addEventListener("keyup", (e) => {
  document.getElementById("nameFeedback").textContent =
    `You typed: ${e.target.value}`;
});

// ==========================
// Part 2: Interactive Elements
// ==========================

// Light/Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
});

// ==========================
// Part 3: Form Validation
// ==========================
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  let valid = true;

  // Clear old messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Validate Name
  const name = document.getElementById("formName").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters.";
    valid = false;
  }

  // Validate Email with regex
  const email = document.getElementById("formEmail").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Validate Password
  const password = document.getElementById("formPassword").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  // If valid, show success
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "✅ Form submitted successfully!";
  }
});
