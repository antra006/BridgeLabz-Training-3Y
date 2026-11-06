// Q4 - DevOps Delay: Async Timeout Race

function contactServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Random failure simulation.
            if (Math.random() < 0.2) {
                reject(new Error(serverName + " failed to respond."));
            } else {
                console.log(serverName + " responded.");
                resolve(serverName);
            }
        }, delay);
    });
}

// Create the promises once so both combinators observe the same requests.
const serverA = contactServer("Server A", 2000);
const serverB = contactServer("Server B", 3000);

// Promise.all waits for every server. It rejects if any server rejects.
Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.error("Deployment error:", error.message);
    });

// Promise.race settles as soon as the first promise settles.
// If the first response is a failure, race also rejects.
Promise.race([serverA, serverB])
    .then((fastestServer) => {
        console.log("Fastest response:", fastestServer);
    })
    .catch((error) => {
        console.error("Fastest response failed:", error.message);
    });
