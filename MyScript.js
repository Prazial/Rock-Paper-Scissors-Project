const playerchoice = ["rock", "paper", "scissors"];//declare an array of choices

function game(){
  playRound();
}



function playRound(playerSelection,computerselection){
    const playerselection = gethumanchoice();
    const computerselection = getcomputerchoice();
}


function gethumanchoice(){
    let input = prompt("Enter your choice (rock, paper, scissors):");
    input = input.toLowerCase();
    while (!playerchoice.includes(input)) {
        input = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }



function getcomputerchoice(){
    return playerchoice[Math.floor(Math.random() * playerchoice.length)];
}//Get random input from the computer
game();