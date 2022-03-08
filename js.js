let playerSelection;

function computerPlays() {
    let computerSelection = Math.random(); 
    if (computerSelection < 0.33) {
        return 'Rock';
    } else if (computerSelection >= 0.33 && computerSelection < 0.66) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

playerSelection = prompt("What do you choose?", "");
playerSelection = playerSelection.toLowerCase();

function playRound (computerSelection, playerSelection) {
    /*devuelve quien es el ganador "You Lose! Paper beats Rock"*/
}

function game (playRound, 5) {
    /*arroja el resultado de quien gana*/
}