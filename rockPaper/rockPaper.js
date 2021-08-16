// variable initalization
var playerSelection = ""
var computerSelection = ""
var playerScore = 0;
var computerScore = 0;
const myArray = ["Rock", "Paper", "Scissors"];


// Assigning event listeners to buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissBtn = document.querySelector('#sciss');
rockBtn.addEventListener('click', () => { gameResult(playRound('rock', computerPlay())); updateScoreboard(); });
paperBtn.addEventListener('click', () => { gameResult(playRound('paper', computerPlay())); updateScoreboard(); });
scissBtn.addEventListener('click', () => { gameResult(playRound('scissors', computerPlay())); updateScoreboard(); });

//select computers choice
function computerPlay() {
   return myArray[Math.floor(Math.random() * myArray.length)];
}
console.log(computerPlay())

function gameResult(result) {
    const resultBanner = document.querySelector('#result');
    resultBanner.textContent = result;
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" || 
    playerSelection == "paper" && computerSelection == "rock" ) {
        playerScore++
        return `You Win! ${playerSelection} beats ${computerSelection}`;
        
    }
    else if  (playerSelection == computerSelection){
       return `Its a draw try again`;
    }
    else {
        computerScore++
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function updateScoreboard () {
    const scoreBoard = document.querySelector("#scoreboard");
    scoreBoard.setAttribute('style', 'white-space: pre;');
    scoreBoard.textContent = `Your score is ${playerScore}. \r\n The Computer's score is ${computerScore}. \r\n First to five wins!`;

    if(playerScore >= 5 ) {
        const div = document.createElement('h1');
        div.textContent = "Congratulations! You Won"
        scoreBoard.appendChild(div);
    }
    else if(computerScore >= 5 ) {
        const div = document.createElement('h1');
        div.textContent = "Im sorry You lost!"
        scoreBoard.appendChild(div);
    }

};

