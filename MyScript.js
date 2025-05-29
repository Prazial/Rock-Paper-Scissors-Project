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
    if (playerchoice.includes(input)) {
        return input;
    } else {
        console.log("Invalid choice. Please try again.");
        return gethumanchoice(); // Recursively ask for input until valid
    }
console.log(input);



function getcomputerchoice(){
    return playerchoice[Math.floor(Math.random() * playerchoice.length)];
}//Get random input from the computer
