"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

for (const transaction of transactions) {
  try {
    if (transaction === null) throw new TypeError("Null transaction");
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new Error("Missing id or amount");
    }
    if (transaction.amount < 0) throw new RangeError("Negative amount");

    valid.push(transaction);
    console.log("Valid transaction:", transaction);
  } catch (error) {
    invalid.push({ transaction, error: error.message, type: error.name });
    console.log("Invalid transaction:", error.name, error.message);
  }
}

console.log("Successful count:", valid.length);
console.log("Failed count:", invalid.length);
console.log("Valid list:", valid);
console.log("Invalid list:", invalid);
// Debugging: set a breakpoint inside the loop and watch transaction, valid, and invalid.
