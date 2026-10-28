// Q6. Event-Based Counter Simulation
// Simulates clicks by manually calling increment() and decrement().

let count = 0;

function increment() {
    count++;

    // Nested function can read the outer function's scope and global count.
    function logCount() {
        console.log(`Count after increment: ${count}`);
    }

    logCount();
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// Simulated click events:
increment();
increment();
decrement();
increment();
