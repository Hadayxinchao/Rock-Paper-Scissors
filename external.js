var answer = ["rock", "paper", "scissor"];
function getComputerChoice() {
    var index = Math.floor(Math.random() * answer.length);
    return answer[index];
}
function playRound(playerSelection, computerSelection) {
    playerIndex = answer.indexOf(playerSelection);
    computerIndex = answer.indexOf(computerSelection);
    if (playerIndex == computerIndex) {
        return "Ties";
    }
    else if (computerIndex - playerIndex == 1){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerIndex - playerIndex == 2){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerIndex - computerIndex == 1){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } 
    else if (playerIndex - computerIndex == 2){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
function game() {
    var lives = 5;
    while(lives != 0){
        var playerSelection = prompt("Enter your choice").toLowerCase();
        var computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        lives--;
    }
}
game();
