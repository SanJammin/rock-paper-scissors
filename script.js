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

//Selection Variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice ();

// Score Variables
let humanScore = 0;
let computerScore = 0;

// Round Counter
let roundCounter = 1;
if (humanScore + 1 || computerScore + 1) {
    roundCounter += 1;
}

// Play Round Code
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Draw!";
    } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") || 
    (humanChoice === "Paper" && computerChoice === "Rock") || 
    (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You Win! " + humanChoice + " beats " + computerChoice;
    } else {
        return "You Lose! " + computerChoice + " beats " + humanChoice;
    }
}


// Play Game Code
function playGame() {
}

