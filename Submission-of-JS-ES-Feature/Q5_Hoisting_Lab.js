"use strict";

// var declarations are hoisted and initialized as undefined.
// Function declarations can be called before their definition.
// let is in the temporal dead zone until its declaration is reached.

var score = 50;
function announce() {
  console.log("Game started");
}
let status = "ready";

console.log(score);
announce();
startGame();

function startGame() {
  console.log(status);
}

// Arrow functions are assigned to variables and cannot be called before initialization.
const startGameArrow = () => console.log(status);
startGameArrow();
