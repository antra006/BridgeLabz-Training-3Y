// Q9 - Debugging the Event Loop

// Predicted output order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// Synchronous statements execute first, in their written order.
// Promise.then() schedules a microtask.
// setTimeout() schedules a macrotask.
// Once synchronous code finishes, JavaScript runs queued microtasks
// before it starts the next macrotask. Therefore, the Promise callback
// appears before the timeout callback, even with a 0 ms timeout.
