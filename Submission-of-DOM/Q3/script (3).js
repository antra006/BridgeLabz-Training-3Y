// Q3: Three-step form with validation and a final summary.
const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");
const form = document.getElementById("registrationForm");
let currentStep = 0;

function showStep(index) {
    steps.forEach((step, stepIndex) => {
        step.classList.toggle("active", stepIndex === index);
    });
    backButton.disabled = index === 0;
    nextButton.textContent = index === steps.length - 1 ? "Submit" : "Next";
}

function isCurrentStepValid() {
    const input = steps[currentStep].querySelector("input");
    if (!input.checkValidity()) {
        input.reportValidity();
        return false;
    }
    return true;
}

nextButton.addEventListener("click", function () {
    if (!isCurrentStepValid()) return;

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        form.hidden = true;
        summary.hidden = false;
        summary.innerHTML = `
            <h2>Registration Summary</h2>
            <p><strong>Name:</strong> ${escapeHTML(document.getElementById("name").value)}</p>
            <p><strong>Email:</strong> ${escapeHTML(document.getElementById("email").value)}</p>
            <p><strong>Password:</strong> ${"*".repeat(document.getElementById("password").value.length)}</p>
            <p>All 3 steps completed successfully!</p>
        `;
    }
});

backButton.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
}

showStep(currentStep);
