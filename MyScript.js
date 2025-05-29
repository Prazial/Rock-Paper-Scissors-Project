let playerchoice = ["rock", "paper", "scissors"];
function getcomputerchioice(){
    return playerchoice[Math.floor(Math.random() * playerchoice.length)];
}
console.log(getcomputerchioice());

function gethumanchoice(){
    let choice = prompt("Enter your choice (rock, paper, scissors):");
    while (!playerchoice.includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
    }
    return choice;
}
console.log(gethumanchoice());