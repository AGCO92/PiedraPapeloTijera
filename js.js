let playerCount = 0;
let computerCount = 0;
let win;
let lose;
let tie;


function playRound (computerSelection, playerSelection) {    
    win = `You Win! ${playerSelection} beats ${computerSelection}`;
    lose = `You Lose! ${computerSelection} beats ${playerSelection};`
    tie = `It's a tie`;
    if (computerSelection === playerSelection) {
        return tie;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return win;
    } else {
        return lose;
    }
}

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

function playerPlays() {
    return prompt("What do you choose?", "").toLowerCase();
}

function logIt(resultado) {
    console.log(resultado)
}


function game (playerPlays, computerPlays, playRound, logIt) {
    for(let i = 0; i < 5; i++){
        let playerSelection = playerPlays();
        let computerSelection = computerPlays();
        let result = playRound(playerSelection, computerSelection);
        logIt(result)
        if (win) {
            playerCount++;
        } else if (lose) {
            computerCount++
        }
    }
    if (playerCount < computerCount){
        logIt('Congratulations, you win')
    } else if (playerCount > computerCount) {
        logIt('Sorry, you lose')
    } else {
        logIt("It's a tie")
    }
}

game (playerPlays, computerPlays, playRound, logIt)
