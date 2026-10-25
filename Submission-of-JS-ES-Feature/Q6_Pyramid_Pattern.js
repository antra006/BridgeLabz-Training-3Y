"use strict";

const input = process.argv[2];
const givenLimit = input === undefined ? 5 : Number(input);
const limit = Number.isInteger(givenLimit) && givenLimit > 0 ? givenLimit : 5;

for (let row = 1; row <= limit; row++) {
  let pattern = "";
  for (let col = 1; col <= row; col++) {
    pattern += "* ";
  }
  console.log(pattern.trim());
}

// Run with: node Q6_Pyramid_Pattern.js 7
// Replace let with var to compare scope behavior. The printed pattern remains the same.
// Debugging: watch row, col, and pattern inside the nested loops.
