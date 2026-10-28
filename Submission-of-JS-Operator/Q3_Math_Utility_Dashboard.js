// Q2. String Manipulation Report
// Cleans a product title and reports its length.

const productName = " wireless headphones PRO ";

// Remove extra spaces and convert the text to lowercase.
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word using split(), map(), and join().
const titleCaseName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with "Pro Edition".
const cleanedTitle = titleCaseName.replace("Pro", "Pro Edition");

console.log(`Cleaned product title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
