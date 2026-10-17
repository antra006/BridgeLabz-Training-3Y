// Q3. Math Utility Dashboard
// Displays common mathematical results for x = 16.75.

const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cubedValue = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

const summary = `
Math Utility Dashboard
----------------------
Number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot}
Power (x^3): ${cubedValue}
Random number (10-50): ${randomNumber}
`;

console.log(summary);
