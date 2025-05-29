let playerchoice = ["rock", "paper", "scissors"];
function getcomputerchioice(){
    return playerchoice[Math.floor(Math.random() * playerchoice.length)];
}
console.log(getcomputerchioice());

function gethumanchoice(){
    let choice = prompt("Enter your choice (rock, paper, scissors):");
    if (!playerchoice.includes(choice)) {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return gethumanchoice(); // Recursively prompt until a valid choice is made
    }
console.log(gethumanchoice());