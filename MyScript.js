let playerchoice = ["rock", "paper", "scissors"];
function getcomputerchoice(){
    return playerchoice[Math.floor(Math.random() * playerchoice.length)];
}
console.log(getcomputerchoice());

function gethumanchoice(){
    let choice = prompt("Enter your choice (rock, paper, scissors):");
    return choice; // Recursively prompt until a valid choice is made
    }
console.log(gethumanchoice());