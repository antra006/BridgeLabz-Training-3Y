"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);
  const isValid = value !== null && value !== undefined &&
    String(value).trim() !== "" && Number.isFinite(numberValue);

  console.log("Original:", value, "| Number:", numberValue,
    "| Boolean:", booleanValue, "| String:", stringValue);

  if (isValid) {
    validNumbers.push(numberValue);
  } else {
    invalidNumbers.push(value);
    console.log("Invalid number:", value);
  }
}

console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
