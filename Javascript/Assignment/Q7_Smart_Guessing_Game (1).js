// Q7. Smart Guessing Game
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Change this test value to play.

console.log(`Secret number (for testing): ${secretNumber}`);
console.log(`Your guess: ${userGuess}`);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  const difference = Math.abs(userGuess - secretNumber);
  if (difference <= 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
