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

function getHumanChoice() {
    let humanChoice = prompt("What do you choose?");
    return humanChoice;

}

console.log(getHumanChoice());
console.log(getComputerChoice());

