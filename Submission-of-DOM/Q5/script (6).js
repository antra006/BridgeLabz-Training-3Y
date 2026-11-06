// Q5: Image gallery with modal preview.
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const modalImage = document.getElementById("modalImage");
const closeButton = document.getElementById("closeButton");

gallery.addEventListener("click", function (event) {
    if (event.target.tagName !== "IMG") return;

    // Use the clicked image URL and request a larger version.
    modalImage.src = event.target.src.replace("/500/350", "/1000/700");
    modalImage.alt = event.target.alt;
    modal.classList.add("show");
});

modal.addEventListener("click", function () {
    // Clicking the backdrop closes the modal.
    modal.classList.remove("show");
});

// Prevent clicks inside the modal from reaching the backdrop.
modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
});

closeButton.addEventListener("click", function () {
    modal.classList.remove("show");
});
