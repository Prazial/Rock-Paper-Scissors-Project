let winners = [];//array to hold the results of each round
const playerchoice = ["rock", "paper", "scissors"];//declare an array of choices

function resetGame() {
 // Function to reset the game
    }

function playGame(){
    let imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
        img.addEventListener('click', () => {
            if (img.id) {
                playRound(img.id);
            }
        });
    });
}

   //const wins = checkWins();
    //if (wins === 5) {
      //  setWins();
        //alert("Game Over! Check scores to see who won.");
    //}


function playRound(humanChoice) {
    const computerChoice = getcomputerchoice();
    const winner = checkWinner(humanChoice, computerChoice);
    winners.push(winner);
    tallyScores();
    displayRound(humanChoice, computerChoice, winner);

   const wins = checkWins();
    if (wins === 5) {
        setWins();
        alert("Game Over! Check scores to see who won.");
        displayEnd();
    }
} 
    function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins == 5) {
    document.querySelector(".winner").textContent =
      "You Won 5 Games, Congrats!";
  } else {
    document.querySelector(".winner").textContent =
      "Sorry, the computer won 5 times";
  }
  document.querySelector(".reset").style.display = "flex";
}


function displayRound(humanChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `Player chose: ${humanChoice}`;
    document.querySelector('.computerChoice').textContent = `Computer chose: ${computerChoice}`;
    document.querySelector('winner').textContent = `Round Winner: ${winner}`;
}

function tallyScores() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector('.playerScore').textContent = `Score : ${pWinCount}`;
  document.querySelector('.computerScore').textContent = `Score : ${cWinCount}`;
  document.querySelector('.ties').textContent = `Ties : ${ties}`;
}
function checkWinner(humanchoice,computerchoice) {
    if (humanchoice === computerchoice) {
       return  "Tie"; // It's a tie, no score change
    } else if (
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")
    )  {
        return "Player";
     } else {
        return "Computer";
     }


function computerchoice(){
    return playerchoice[Math.floor(Math.random() * playerchoice.length)];
};

  function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}
 
function setWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
}

window.addEventListener('DOMContentLoaded', () =>{
  playGame(); // Start the game
});
