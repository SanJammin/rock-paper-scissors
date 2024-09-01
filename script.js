// Computer Choice Code
function getComputerChoice () {
    let x = Math.floor(Math.random() * 100) + 1;

    if (x < 33) {
        return "rock";
    } else if (x >= 33 && x < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}


// Play Round Code
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "Draw!";
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")
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
        
    // Loop
    for (let i = 0; i < 5; i ++){
        // Play Round
        console.log("Round: " + roundCounter);
        const humanChoice = prompt("Choose rock, paper or scissors");
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(result)

        if (result.includes("Win!")) {
            humanScore++;
        } else if (result.includes("Lose!")) {
            computerScore++;
        }
        roundCounter ++;
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

