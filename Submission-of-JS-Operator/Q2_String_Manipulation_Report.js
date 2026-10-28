// Q1. Scope Conflict Resolver
// Demonstrates a global bonus and local variables inside calculateSalary().

let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable
    let totalSalary = salary;

    // The global bonus is added only for permanent employees.
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Base salary: ${salary}`);
    console.log(`Global bonus: ${bonus}`);
    console.log(`Total salary: ${totalSalary}`);
    console.log("------------------------------");
}

calculateSalary(true);
calculateSalary(false);

// Changing the local isPermanent argument does not change global bonus.
console.log(`Global bonus remains: ${bonus}`);
