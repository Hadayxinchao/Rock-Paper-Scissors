var answer = ["rock", "paper", "scissor"];
let playerScore = 0, computerScore = 0;
const container = document.querySelector('.container');

const score = document.createElement("div");
container.appendChild(score);
score.textContent = `Player: ${playerScore} VS Computer: ${computerScore}`;

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.addEventListener('click', () => {
    playRound("rock");  
});
container.appendChild(rock);


const paper = document.createElement("button");
paper.textContent = "Paper";
container.appendChild(paper);
paper.addEventListener('click', () => {
    playRound("paper");
});


const scissor = document.createElement("button");
scissor.textContent = "Scissor";
container.appendChild(scissor);
scissor.addEventListener('click', () => {
    playRound("scissor");
});

const result = document.createElement("div");
container.appendChild(result);



function getComputerChoice() {
    var index = Math.floor(Math.random() * answer.length);
    return answer[index];
}
function playRound(playerSelection) {
    playerIndex = answer.indexOf(playerSelection);
    computerSelection = getComputerChoice();
    computerIndex = answer.indexOf(computerSelection);
    if (playerIndex == computerIndex) {
        result.textContent = "Ties";
    }
    else if (computerIndex - playerIndex == 1){
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        updateScore();
    }
    else if (computerIndex - playerIndex == 2){ 
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        updateScore();
    }
    else if (playerIndex - computerIndex == 1){
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        updateScore();
    } 
    else if (playerIndex - computerIndex == 2){
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        updateScore();
    }
}

function updateScore(){
    score.textContent = `Player: ${playerScore} VS Computer: ${computerScore}`;
    if (computerScore == 5){
        result.textContent = "Computer Wins!";
    }
    else if(playerScore == 5){
        result.textContent = "Player Wins!";
    }
}
