// Q9. Random Math Quiz Generator
const number1 = Math.floor(Math.random() * 20) + 1;
const number2 = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];
let answer;

switch (operator) {
  case "+":
    answer = number1 + number2;
    break;
  case "-":
    answer = number1 - number2;
    break;
  case "*":
    answer = number1 * number2;
    break;
  case "/":
    answer = number1 / number2;
    break;
}

const formattedAnswer = operator === "/" ? answer.toFixed(2) : answer;
console.log(`Question: ${number1} ${operator} ${number2} = ?`);
console.log(`Correct answer: ${formattedAnswer}`);
