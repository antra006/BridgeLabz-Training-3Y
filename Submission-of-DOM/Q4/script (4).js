// Q4: Theme switcher using setAttribute().
const themeButtons = document.querySelectorAll("button[data-choice]");
const currentThemeText = document.getElementById("currentTheme");
const pageBody = document.body;

themeButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const selectedTheme = button.getAttribute("data-choice");

        // Apply the theme through a custom data attribute.
        pageBody.setAttribute("data-theme", selectedTheme);
        // Save the selected theme in another custom attribute.
        pageBody.setAttribute("data-current-theme", selectedTheme);

        currentThemeText.textContent =
            "Current theme: " + selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    });
});
