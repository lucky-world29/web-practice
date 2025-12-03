// Selecting elements
const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

// Open Modal (Remove is-hidden)
openBtn.addEventListener("click", function () {
    modal.classList.remove("is-hidden");
});

// Close Modal (Add is-hidden)
closeBtn.addEventListener("click", function () {
    modal.classList.add("is-hidden");
});
