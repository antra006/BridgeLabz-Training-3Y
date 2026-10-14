// Q6. Progressive Discount System
const total = 7500; // Change this value to test other discount tiers.
let discountRate = 0;

if (total >= 10000) {
  discountRate = 0.25;
} else if (total >= 5000) {
  discountRate = 0.15;
} else if (total >= 2000) {
  discountRate = 0.05;
}

const discountAmount = Math.round(total * discountRate);
const finalPrice = Math.round(total - discountAmount);

console.log(`Original total: ₹${total}`);
console.log(`Discount percentage: ${discountRate * 100}%`);
console.log(`Final price after discount: ₹${finalPrice}`);
