"use strict";

const operations = ["add", "divide", "power", "root", "subtract", "multiply"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
  constructor(operation) {
    super("Invalid operation: " + operation);
    this.name = "InvalidOperationError";
  }
}

function calculate(operation, a, b) {
  switch (operation) {
    case "add": return a + b;
    case "divide":
      if (b === 0) throw new RangeError("Cannot divide by zero");
      return a / b;
    case "power": return a ** b;
    case "root":
      if (a < 0) throw new RangeError("Cannot find real square root of a negative number");
      return Math.sqrt(a);
    case "subtract": return a - b;
    case "multiply": return a * b;
    default: throw new InvalidOperationError(operation);
  }
}

for (const operation of operations) {
  try {
    const result = operation === "root"
      ? calculate(operation, num1)
      : calculate(operation, num1, num2);
    console.log(`${operation}: ${result}`);
  } catch (error) {
    console.log(`${operation} error [${error.name}]: ${error.message}`);
  }
}
