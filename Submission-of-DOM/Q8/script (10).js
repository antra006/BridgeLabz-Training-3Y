// Q8: Custom dropdown without using a select element.
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

dropdownButton.addEventListener("click", function () {
    options.hidden = !options.hidden;
    dropdownButton.setAttribute("aria-expanded", String(!options.hidden));
});

options.addEventListener("click", function (event) {
    if (!event.target.classList.contains("option")) return;

    dropdownButton.textContent = event.target.textContent + " ▼";
    options.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
});

// Capturing phase: this listener runs before the event reaches inner elements.
// It closes the dropdown when a click happens outside the dropdown.
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        options.hidden = true;
        dropdownButton.setAttribute("aria-expanded", "false");
    }
}, true);
