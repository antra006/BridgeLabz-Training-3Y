// Q3 - Bug Tracker: Callback to Promise Migration

// Promise-based version of the original fetchBugs(callback) function.
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3; // Randomly fail sometimes.

            if (apiFailed) {
                reject(new Error("Bug API request failed."));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Bugs fetched successfully:");
        console.table(bugs);
    })
    .catch((error) => {
        console.error("Unable to fetch bugs:", error.message);
    });
