var answer = ["rock", "paper", "scissor"];
let playerScore, computerScore;
const container = document.querySelector('.container');

const score = document.createElement("div");
container.appendChild(score);
score.textContent = `Player: ${playerScore} VS Computer: ${computerScore}`;

const rock = document.createElement("button");
rock.textContent = "Rock";
container.appendChild(rock);


const paper = document.createElement("button");
paper.textContent = "Paper";
container.appendChild(paper);

const scissor = document.createElement("button");
scissor.textContent = "Scissor";
container.appendChild(scissor);

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

function gameStart() {
    playerScore = 0;
    computerScore = 0;
    score.textContent = `Player: ${playerScore} VS Computer: ${computerScore}`;
    result.textContent = "";
    rock.addEventListener('click', rock.fn = function fn () {
        playRound("rock");  
    });

    paper.addEventListener('click', paper.fn = function fn() {
        playRound("paper");
    });
    scissor.addEventListener('click', scissor.fn = function fn() {
        playRound("scissor");
    });
}

function updateScore(){
    score.textContent = `Player: ${playerScore} VS Computer: ${computerScore}`;
    if (computerScore == 5){
        result.textContent = "Computer Wins!";
        playAgain();
    }
    else if(playerScore == 5){
        result.textContent = "Player Wins!";
        playAgain();
    }
}

function playAgain(){   
    rock.removeEventListener('click', rock.fn);
    paper.removeEventListener('click', paper.fn);
    scissor.removeEventListener('click', scissor.fn);
    const buttonPlayAgain = document.createElement("button")
    container.appendChild(buttonPlayAgain);
    buttonPlayAgain.textContent = "Play Again";
    buttonPlayAgain.addEventListener('click', function () {
        gameStart();
        buttonPlayAgain.remove();
    });
}

gameStart();