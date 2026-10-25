"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
  try {
    const salary = Number(employee.salary);
    const years = Number(employee.years);

    if (!employee.name || !Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new Error("Missing or invalid employee details");
    }

    const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
    console.log(`${employee.name} | Salary: ₹${salary} | Years: ${years} | Bonus: ₹${bonus}`);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
