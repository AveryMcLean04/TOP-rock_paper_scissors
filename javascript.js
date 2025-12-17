function getComputerChoice() {
    choice = Math.random()
    if (choice < (1/3)) {
        return "rock";
    } else if (choice < (2/3)) {
        return "paper";
    } else if (choice >= (2/3)) {
        return "scissors";
    }
}

// function getHumanChoice() {
//     // let humanChoice = prompt("What do you choose?");
//     humanChoice = humanChoice.toLocaleLowerCase();
//     return humanChoice;

// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = ""
        if (humanChoice == 'rock') {
            if (computerChoice == 'paper') {
                result = "You lose! Paper beats rock";
                computerScore += 1;
            } else if (computerChoice == 'scissors') {
                result = "You win! Rock beats scissors";
                humanScore += 1;
            } else {
                result = "Tie!";
            }
        } else if (humanChoice == 'paper') {
            if (computerChoice == 'scissors') {
                result = "You lose! Scissors beats paper";
                computerScore += 1;
            } else if (computerChoice == 'rock') {
                result = "You win! Paper beats rock";
                humanScore += 1;
            } else {
                result = "Tie!";
            }
        } else if (humanChoice == 'scissors') {
            if (computerChoice == 'rock') {
                result = "You lose! Rock beats scissors";
                computerScore += 1;
            } else if (computerChoice == 'paper') {
                result = "You win! Scissors beats paper";
                humanScore += 1;
            } else {
                result = "Tie!";
            }
        }
        return result;
    }


// playRound(getHumanChoice(), getComputerChoice());

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice) {
//         if (humanChoice == 'rock') {
//             if (computerChoice == 'paper') {
//                 console.log("You lose! Paper beats rock");
//                 computerScore += 1;
//             } else if (computerChoice == 'scissors') {
//                 console.log("You win! Rock beats scissors");
//                 humanScore += 1;
//             } else {
//                 console.log("Tie!");
//             }
//         } else if (humanChoice == 'paper') {
//             if (computerChoice == 'scissors') {
//                 console.log ("You lose! Scissors beats paper");
//                 computerScore += 1;
//             } else if (computerChoice == 'rock') {
//                 console.log("You win! Paper beats rock");
//                 humanScore += 1;
//             } else {
//                 console.log("Tie!");
//             }
//         } else if (humanChoice == 'scissors') {
//             if (computerChoice == 'rock') {
//                 console.log("You lose! Rock beats scissors");
//                 computerScore += 1;
//             } else if (computerChoice == 'paper') {
//                 console.log("You win! Scissors beats paper");
//                 humanScore += 1;
//             } else {
//                 console.log("Tie!");
//             }
//         }
//     }

//     for (i = 0; i < 5; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     if (humanScore > computerScore) {
//         console.log("Congrats! You win!");
//     } else if (computerScore > humanScore) {
//         console.log("Too bad so sad - you lose!");
//     } else {
//         console.log("It's a tie!");
//     }

// }

// playGame();

const buttons = document.querySelectorAll("button");

const resultsDiv = document.querySelector("#results");

const playerScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.textContent.toLowerCase();

        if (humanScore < 5 && computerScore < 5) {
            const roundResult = playRound(playerChoice, getComputerChoice());
            resultsDiv.textContent = roundResult;

            playerScoreDisplay.textContent = `Your Score: ${humanScore}`;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        }
        

        

        if (humanScore == 5) {
            const victoryMessage = document.createElement("div");
            victoryMessage.textContent = "You WIN!!!!";
            victoryMessage.style.color = "green";
            
            const board = document.querySelector(".board");

            board.append(victoryMessage);
        }

        if (computerScore == 5) {
            const lossMessage = document.createElement("div");
            lossMessage.textContent = "You lose :(";
            lossMessage.style.color = "red";

            const board = document.querySelector(".board");
            board.append(lossMessage);
        }
    });
});