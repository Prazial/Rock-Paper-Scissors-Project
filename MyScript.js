const playerchoice = ["rock", "paper", "scissors"];//declare an array of choices

const humanscore = 0; //initialize human score
const computerscore = 0; //initialize computer score

function playRound(humanchoice,computerchoice) {
    if (humanchoice === computerchoice) {
        console.log("It's a tie!");
    } else if (
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")
    ) {
        console.log("You win this round!");
        humanscore++;
    } else {
        console.log("Computer wins this round!");
        computerscore++;
    }
    console.log(`Current Score - You: ${humanscore}, Computer: ${computerscore}`);
}
    const humanSelection = gethumanchoice();
    const computerSelection = getcomputerchoice();

    playRound(humanSelection, computerSelection);

function gethumanchoice(){
    let input = prompt("Enter your choice (rock, paper, scissors):");
    input = input.toLowerCase();
    // Convert input to lowercase to handle case insensitivity
}


function getcomputerchoice(){
    return playerchoice[Math.floor(Math.random() * playerchoice.length)];
}//Get random input from the computer


function playGame(){
    for (let i = 0; i < 5; i++) { // Play 5 rounds
        const humanSelection = gethumanchoice();
        const computerSelection = getcomputerchoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final Score - You: ${humanscore}, Computer: ${computerscore}`);
    if (humanscore > computerscore) {
        console.log("Congratulations! You win the game!");
    } else if (humanscore < computerscore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("It's a tie overall!");
    }
}
playGame(); // Start the game