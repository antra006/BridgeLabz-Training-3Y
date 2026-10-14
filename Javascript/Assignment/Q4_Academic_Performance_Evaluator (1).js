// Q4. Academic Performance Evaluator
// Change these marks to test different outcomes.
const marks = [88, 91, 79, 86, 90];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

if (marks.some(mark => mark < 35)) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
