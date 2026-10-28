// Q4. Array Performance Analyzer
// Creates 8 random scores from 30 through 100 and summarizes performance.

const scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedStudents = scores.filter(score => score >= 50).length;

console.log("Array Performance Analyzer");
console.log("--------------------------");
console.log(`Scores: ${scores.map(score => score).join(", ")}`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students who passed (50 or above): ${passedStudents}`);
