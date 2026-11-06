// Q10 - The Final Delivery: Async Pipeline Debugger

function runStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            // Each step has a 20% chance of failure.
            if (Math.random() < 0.2) {
                reject(new Error(stepName + " failed"));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // await keeps the steps in sequence. Each step returns a Promise.
        await runStep("takeOrder", "Step 1: Order taken");
        await runStep("prepare", "Step 2: Food prepared");
        await runStep("pack", "Step 3: Package ready");
        await runStep("dispatch", "Step 4: Out for delivery");
        await runStep("deliver", "Delivery completed!");
    } catch (error) {
        // The first rejected Promise transfers control to this catch block.
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();

// async functions return Promises. await pauses this function until the
// current Promise settles, while the JavaScript event loop can handle
// other work. A rejected Promise behaves like a thrown error and is caught
// by the try/catch block.
