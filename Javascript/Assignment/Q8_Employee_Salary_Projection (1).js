// Q8. Employee Salary Projection
const currentSalary = 40000;
const annualIncrementRate = 8; // Percentage
let salary = currentSalary;
const projection = [];

for (let year = 1; year <= 5; year++) {
  salary *= 1 + annualIncrementRate / 100;
  salary = Math.round(salary);
  projection.push({ year, salary: `₹${salary.toLocaleString("en-IN")}` });
}

console.table(projection);
