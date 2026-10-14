// Q2. Multi-Type Data Summary
const userName = "Antra";
const age = 20;
const isStudent = true;
const hobbies = ["coding", "music"];
const user = { name: "Antra", city: "Mathura" };
const middleName = null;
let address;

const entries = [
  { label: "userName", value: userName, type: typeof userName },
  { label: "age", value: age, type: typeof age },
  { label: "isStudent", value: isStudent, type: typeof isStudent },
  { label: "hobbies", value: JSON.stringify(hobbies), type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { label: "user", value: JSON.stringify(user), type: typeof user },
  { label: "middleName", value: middleName, type: "null" },
  { label: "address", value: address, type: typeof address }
];

console.table(entries);
