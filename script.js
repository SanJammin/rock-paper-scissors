// Computer Choice Code
function getComputerChoice () {
    let x = Math.floor(Math.random() * 100) + 1;

    if (x < 33) {
        return "Rock";
    } else if (x >= 33 && x < 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Human Choice Code - Currently has to have exact values to match
function getHumanChoice () {
    let y = prompt("Pick: Rock, Paper or Scissors");

    if (y === "rock") {
        return "Rock";
    } else if (y === "paper") {
        return "Paper";
    } else if (y === "scissors") {
        return "Scissors";
    } else {
        return "Incorrect, please pick Rock, Paper or Scissors"
    }
}

// Score Variables
let humanScore = 0;
let computerScore = 0;