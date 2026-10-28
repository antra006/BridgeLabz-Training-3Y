// Q5. Boolean Logic Access System
// Access is secure only when all required conditions are satisfied.

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    const isSecure =
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside;

    // Boolean operators &&, ||, and ! are demonstrated here.
    const anyOpening = !isDoorLocked || !isWindowClosed;

    if (isSecure && !anyOpening) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

checkSecurity();

// Change a condition and test a second outcome.
isWindowClosed = false;
checkSecurity();
