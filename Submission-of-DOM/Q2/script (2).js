// Q2: Live character counter with a maximum of 100 characters.
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
    const remaining = maximumCharacters - message.value.length;
    counter.textContent = remaining + " characters remaining";
    counter.className = "";

    if (remaining <= 0) {
        counter.classList.add("danger");
    } else if (remaining <= 20) {
        counter.classList.add("warning");
    }
}

message.addEventListener("input", updateCounter);

// Prevent any additional character once the limit is reached.
message.addEventListener("beforeinput", function (event) {
    if (message.value.length >= maximumCharacters &&
        event.inputType.startsWith("insert")) {
        event.preventDefault();
    }
});

resetButton.addEventListener("click", function () {
    message.value = "";
    updateCounter();
});

updateCounter();
