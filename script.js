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

// Human Choice Code
function getHumanChoice () {
    let y = prompt("Pick: Rock, Paper or Scissors").toLowerCase();

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

//Play Round Code
function playRound (humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore += 1
        return "You Win: Rock beats Scissors"
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore += 1
        return "You Win: Paper beats Rock"
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore += 1
        return "You Win: Scissors beats Paper"
    } else if (humanChoice === computerChoice) {
        return "Draw"
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore += 1
        return "You Lose: Paper beats Rock"
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore += 1
        return "You Lose: Scissors beats Paper"
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore += 1
        return "You Lose: Rock beats Scissors"
    }
}

//Selection Variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice ();