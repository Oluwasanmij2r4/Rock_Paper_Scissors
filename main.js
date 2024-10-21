let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'scissors';
    } else {
        return 'paper';
    }
}

function getHumanChoice() {

    let choice = prompt('Input choice').toLowerCase();

    if (choice === 'rock') {
        return 'rock';
    } else if (choice === 'scissors') {
        return 'scissors';
    } else if (choice === 'paper') {
        return 'paper';
    } else {
        return 'Input wrong';
    }
}




function playRound(human, computer) {
//     const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// console.log(humanChoice);

let result;

    if (human === computer){
        result = 'the game is tied';
    } else if ((human === 'rock' && computer === 'scissors') || (human === 'scissors' && computer === 'paper') || (human === 'paper' && computer === 'rock')){
        result = `You won! ${human} beats ${computer}`;
        humanScore++;
    } else {
        result = `You lose, computer wins! ${computer} beats ${human}`;
        computerScore++;
    }

    console.log(result);
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(humanChoice);
console.log(computerChoice);

playRound(humanChoice, computerChoice);