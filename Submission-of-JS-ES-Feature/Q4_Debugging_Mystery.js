"use strict";

// Original line `greeting = "Welcome";` causes ReferenceError in strict mode
// because greeting was never declared.

function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
}

showMessage();

// Debugging: add greeting to Watch and inspect the Call Stack inside showMessage.
