// ...existing code...
let winners = []; // array to hold the results of each round
const playerchoice = ["rock", "paper", "scissors"]; // declare an array of choices

function resetGame() {
    winners = [];
    tallyScores();
    const elems = ['.playerChoice', '.computerChoice', '.roundWinner', '.winner'];
    elems.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.textContent = '';
    });
    const resetBtn = document.querySelector('.reset');
    if (resetBtn) resetBtn.style.display = 'none';
    // re-enable clicks
    document.querySelectorAll('img').forEach(img => img.style.pointerEvents = 'auto');
}

function playGame() {
    let imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
        img.addEventListener('click', () => {
            if (img.id) {
                playRound(img.id);
            }
        });
    });

    const resetBtn = document.querySelector('.reset');
    if (resetBtn) resetBtn.addEventListener('click', resetGame);
}

function playRound(humanChoice) {
    const computerChoice = computerchoice();
    const winner = checkWinner(humanChoice, computerChoice);
    winners.push(winner);
    tallyScores();
    displayRound(humanChoice, computerChoice, winner);

    const wins = checkWins();
    if (wins === 5) {
        setWins();
        displayEnd();
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;

    if (playerWins == 5) {
        const el = document.querySelector(".winner");
        if (el) el.textContent = "You Won 5 Games, Congrats!";
    } else {
        const el = document.querySelector(".winner");
        if (el) el.textContent = "Sorry, the computer won 5 times";
    }
    const resetBtn = document.querySelector(".reset");
    if (resetBtn) resetBtn.style.display = "flex";
}

function displayRound(humanChoice, computerChoice, winner) {
    const playerEl = document.querySelector('.playerChoice');
    const compEl = document.querySelector('.computerChoice');
    const roundEl = document.querySelector('.roundWinner') || document.querySelector('.winner');

    if (playerEl) playerEl.textContent = `Player chose: ${humanChoice}`;
    if (compEl) compEl.textContent = `Computer chose: ${computerChoice}`;
    if (roundEl) roundEl.textContent = `Round Winner: ${winner}`;
}

function tallyScores() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    const pEl = document.querySelector('.playerScore');
    const cEl = document.querySelector('.computerScore');
    const tEl = document.querySelector('.ties');
    if (pEl) pEl.textContent = `Score : ${pWinCount}`;
    if (cEl) cEl.textContent = `Score : ${cWinCount}`;
    if (tEl) tEl.textContent = `Ties : ${ties}`;
}

function checkWinner(humanchoice, computerchoice) {
    if (humanchoice === computerchoice) {
        return "Tie";
    } else if (
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function computerchoice() {
    return playerchoice[Math.floor(Math.random() * playerchoice.length)];
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount, cWinCount);
}

function setWins() {
    // disable further clicks once someone reached 5 wins
    document.querySelectorAll('img').forEach(img => img.style.pointerEvents = 'none');
}

window.addEventListener('DOMContentLoaded', () => {
    playGame();
});
// ...existing code...