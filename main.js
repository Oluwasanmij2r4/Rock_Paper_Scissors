

const Rock = document.querySelector('.btn1')
const Scissors = document.querySelector('.btn2')
const Paper = document.querySelector('.btn3')
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
console.log(getComputerChoice());

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
// console.log(getHumanChoice())


// function disableButtons() {
//     Rock.disabled = true;
//     Scissors.disabled = true;
//     Paper.disabled = true;
// }

// function rock() {
//     console.log('Rock');
//     disableButtons()
// }

// function scissors() {
//     console.log('scissors');
//     disableButtons()
// }

// function paper() {
//     console.log('paper');
//     disableButtons()
// }

// Rock.addEventListener('click', rock);
// Scissors.addEventListener('click', scissors);
// Paper.addEventListener('click', paper);





function playRound(human, computer) {
//     const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// console.log(humanChoice);

    if (human === computer){
        return 'the game is tied';
    } else if ((human === 'rock' && computer === 'scissors') || (human === 'scissors' && computer === 'paper') || (human === 'paper' && computer === 'rock')){
        return 'You won';
    } else {
        return 'You lose, computer wins';
    }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(humanChoice);

console.log(playRound(humanChoice, computerChoice));