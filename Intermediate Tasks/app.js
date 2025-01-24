// Form Validation
document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;

    let errors = [];

    if (name === "") errors.push("Name is required.");
    if (!/\S+@\S+\.\S+/.test(email)) errors.push("Email is invalid.");
    if (password.length < 6) errors.push("Password must be at least 6 characters.");
    if (age < 18 || age > 100) errors.push("Age must be between 18 and 100.");

    const errorMessages = document.getElementById("errorMessages");
    if (errors.length > 0) {
        errorMessages.textContent = errors.join(" ");
    } else {
        errorMessages.textContent = "Form submitted successfully!";
    }
});

// Modal Logic
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", function () {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
