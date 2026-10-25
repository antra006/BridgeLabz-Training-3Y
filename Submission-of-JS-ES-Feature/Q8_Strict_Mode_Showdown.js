"use strict";

// In strict mode, duplicate parameter names are a SyntaxError.
// Assigning to undeclared `total` causes ReferenceError.
// `delete total` (an unqualified identifier) is a SyntaxError.

// Correct ES6 version:
function demo(first, second) {
  const total = 10;
  console.log(`First: ${first}, Second: ${second}, Total: ${total}`);
}

demo(5, 10);

// To compare non-strict behavior, test the original code in a separate file
// without the "use strict" directive.
