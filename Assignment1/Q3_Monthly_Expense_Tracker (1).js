// Q3. Monthly Expense Tracker
const expenses = {
  food: 4500,
  travel: 1200,
  rent: 7000,
  bills: 1500,
  leisure: 1000
};

let total = 0;
for (const amount of Object.values(expenses)) {
  total += amount;
}

const average = total / Object.keys(expenses).length;
total += total * 0.10; // Add 10% tax to the total
const finalAmount = total;

console.log(`Total before tax: ₹${(finalAmount / 1.10).toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
