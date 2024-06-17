// Function to roll a single die and return a random number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to play the Craps game
function playCraps() {
    // Roll two dice
    let die1 = rollDie();
    let die2 = rollDie();
    let sum = die1 + die2; // Calculate the sum of the dice

    // Get the result div to display the output
    let resultDiv = document.getElementById("result");

    // Determine the game outcome based on the sum and values of the dice
    if (sum === 7 || sum === 11) {
        resultDiv.innerHTML = `Rolled ${die1} and ${die2}. Sum is ${sum}. Craps - Lose`;
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultDiv.innerHTML = `Rolled ${die1} and ${die2}. Sum is ${sum}. Double and even - Won`;
    } else {
        resultDiv.innerHTML = `Rolled ${die1} and ${die2}. Sum is ${sum}. Pushed`;
    }
}

// Add an event listener to the play button to trigger the playCraps function when clicked
document.getElementById("playButton").addEventListener("click", playCraps);