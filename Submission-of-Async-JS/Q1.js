// Q1 - The Startup Morning: Async Coffee Maker
// Each function returns a Promise and takes 1-2 seconds.

function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Water could not be boiled.");
            } else {
                console.log("Water boiled.");
                resolve();
            }
        }, delay);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Coffee could not be brewed.");
            } else {
                console.log("Coffee brewed.");
                resolve();
            }
        }, delay);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Coffee could not be poured.");
            } else {
                console.log("Coffee poured into the cup.");
                resolve();
            }
        }, delay);
    });
}

// Promise chaining makes the steps run one after another.
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => console.error("Coffee process failed:", error));
