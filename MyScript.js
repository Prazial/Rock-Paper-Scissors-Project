let playerchoice = ["rock", "paper", "scissors"];
function getcomputerchioice(){
    return playerchoice[Math.floor(Math.random() * playerchoice.length)];
}
console.log(getcomputerchioice());