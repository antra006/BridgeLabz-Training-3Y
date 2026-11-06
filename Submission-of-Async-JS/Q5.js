// Q5 - Frontend Rush: Avoiding Callback Hell

// PART 1: Nested callbacks (callback hell demonstration).
function designCallback(next) {
    setTimeout(() => {
        console.log("Design completed");
        next();
    }, 1000);
}

function buildCallback(next) {
    setTimeout(() => {
        console.log("Build completed");
        next();
    }, 1000);
}

function testCallback(next) {
    setTimeout(() => {
        console.log("Testing completed");
        next();
    }, 1000);
}

function deployCallback(next) {
    setTimeout(() => {
        console.log("Deployment completed");
        next();
    }, 1000);
}

function celebrateCallback() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

console.log("Callback version started");

designCallback(() => {
    buildCallback(() => {
        testCallback(() => {
            deployCallback(() => {
                celebrateCallback();
            });
        });
    });
});

// PART 2: Cleaner async/await version.
// Run this after the callback example has finished.
function runStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    console.log("\\nAsync/await version started");
    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");
}

setTimeout(() => {
    runPipeline();
}, 5500);

// async/await improves readability because sequential asynchronous steps
// look like ordinary top-to-bottom code instead of deeply nested callbacks.
// The await keyword pauses this async function until its Promise settles;
// it does not block the JavaScript thread.
