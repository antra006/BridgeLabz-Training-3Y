"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
  const lineNumber = i + 1;

  try {
    const item = JSON.parse(rawData[i]);

    if (!Object.prototype.hasOwnProperty.call(item, "user") ||
        !Object.prototype.hasOwnProperty.call(item, "age")) {
      throw new Error("Missing user or age key");
    }

    const age = Number(item.age);
    if (!Number.isFinite(age)) throw new Error("Invalid age");

    const record = { ...item, age };
    clean.push(record);
    if (age < 18) under18.push(record);
  } catch (error) {
    errors.push({ lineNumber, message: error.message });
    console.log(`Line ${lineNumber}: ${error.message}`);
  }
}

console.log("Clean records:", clean);
console.log("Users under 18:", under18);
console.log("Errors:", errors);
// Debugging: inspect lineNumber, item, clean, and errors at each iteration.
