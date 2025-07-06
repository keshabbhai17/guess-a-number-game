let randomNumber = Math.floor(Math.random() * 99) + 1;
let attempts = 0;
const maxAttempts = 7;
let guessHistory = [];
let wins = 0;
let losses = 0;

document.getElementById("guessButton").addEventListener("click", function() {
  const guessInput = document.getElementById("guessInput");
  const guess = Number(guessInput.value);
  const message = document.getElementById("message");
  const guessList = document.getElementById("guessList");

  if (guess > 99 || guess < 1) {
    message.textContent = "Enter a number between 1 and 99!";
    message.style.color = "orange";
    return;
  }

  attempts++;
  guessHistory.push(guess);
  guessList.textContent = "Your guesses: " + guessHistory.join(", ");

  if (guess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed it in " + attempts + " attempt(s)!";
    message.style.color = "green";
    wins++;
    endGame();
  } else if (attempts === maxAttempts) {
    message.textContent = "❌ You lost! The number was " + randomNumber;
    message.style.color = "red";
    losses++;
    endGame();
  } else {
    message.textContent = guess < randomNumber ? "Too low!" : "Too high!";
    message.style.color = "black";
  }

  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
});

function endGame() {
  document.getElementById("guessButton").disabled = true;
  document.getElementById("resetButton").style.display = "inline";
}

document.getElementById("resetButton").addEventListener("click", function() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  attempts = 0;
  guessHistory = [];
  document.getElementById("message").textContent = "";
  document.getElementById("guessList").textContent = "Your guesses: ";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessButton").disabled = false;
  this.style.display = "none";
});
