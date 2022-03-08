let computerSelection = computerPlays();
let playerSelection;
let win = `You Win! ${playerSelection} beats ${computerSelection}`
let lose = `You Lose! ${computerSelection} beats ${playerSelection}`
let tie = `It's a tie`

playerSelection = prompt("What do you choose?", "");
playerSelection = playerSelection.toLowerCase();

function computerPlays() {
    let choose = Math.random(); 
    if (choose < 0.33) {
        return 'rock';
    } else if (choose >= 0.33 && choose < 0.66) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function playRound (playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return tie;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return win;
    } else {
        return lose;
    }
}
 
function game (playRound, x) {
    /*arroja el resultado de quien gana*/
}