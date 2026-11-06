// Q2 - Task Scheduler: Micro vs Macro Challenge

console.log("Start");

setTimeout(() => {
    // setTimeout callback is a macrotask.
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    // Promise.then callback is a microtask.
    console.log("Promise callback");
});

console.log("Synchronous log");
console.log("End");

// Expected output:
// Start
// Synchronous log
// End
// Promise callback
// Timeout callback
//
// JavaScript first completes all synchronous code.
// After that, it empties the microtask queue (including Promise callbacks)
// before moving to the macrotask queue (including setTimeout callbacks).
