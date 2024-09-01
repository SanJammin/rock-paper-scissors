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


// Play Round Code
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

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
    // Score Variables
    let humanScore = 0;
    let computerScore = 0;

    // Round Counter
    let roundCounter = 1;
    if (humanScore + 1 || computerScore + 1) {
        roundCounter += 1;
    }

    
    // Loop
    for (let i = 0; i < 5; i ++){
        // Play Round
        console.log("Round: " + roundCounter);
        const humanChoice = prompt("Choose Rock, Paper or Scissors");
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(result)

        if (result.includes("Win!")) {
            humanScore++;
        } else if (result.includes("Lose!")) {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("Congratulations, You Win! " + humanScore + ":" + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You Lose! Better Luck Next Time " + humanScore + ":" + computerScore);
    } else {
        console.log("It's A Draw! " + humanScore + ":" + computerScore)
    }
}

playGame();

