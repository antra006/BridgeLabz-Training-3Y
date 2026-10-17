// Q8. Dynamic Discount Evaluator
// Applies category discounts and, when eligible, an extra cart-wide discount.

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountedPrice = product.price * (1 - discountRate);
    discountedTotal += discountedPrice;

    console.log(
        `${product.item}: Original ₹${product.price}, ` +
        `Discount ${discountRate * 100}%, Final ₹${discountedPrice.toFixed(2)}`
    );
}

// Apply an additional 5% discount if the original cart value is over ₹50,000.
let extraDiscount = 0;
if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
    discountedTotal -= extraDiscount;
}

console.log("------------------------------");
console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Extra cart discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final cart total: ₹${discountedTotal.toFixed(2)}`);
