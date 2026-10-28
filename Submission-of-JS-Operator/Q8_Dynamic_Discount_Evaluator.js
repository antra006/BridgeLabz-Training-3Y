// Q7. Customer Feedback Processor
// Counts words and checks feedback for negative keywords.

const feedback = "Great product! Fast delivery and amazing sound quality!";
const wordCount = feedback.trim().split(/\s+/).length;
const lowerFeedback = feedback.toLowerCase();

const hasNegativeFeedback =
    lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!hasNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
