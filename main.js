const comChoice = document.querySelector(".comChoice");
const humanChoiceDisplay = document.querySelector(".choice");

const rockButton = document.querySelector(".btn1");
const scissorsButton = document.querySelector(".btn2");
const paperButton = document.querySelector(".btn3");

const displayResult = document.createElement("p");
const displayScore = document.createElement("p");
const resultDiv = document.querySelector(".result");

let humanChoice = "";
let humanScore = 0;
let computerScore = 0;
let count = 0;

humanChoiceDisplay.textContent = "Make a choice";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let text;

  if (randomNumber === 0) {
    text = "rock";
  } else if (randomNumber === 1) {
    text = "scissors";
  } else {
    text = "paper";
  }

  comChoice.textContent = text;

  return text;
}

function getHumanChoice(choice) {
  let hmChoice = choice.toLowerCase();

  if (hmChoice === "rock") {
    return "rock";
  } else if (hmChoice === "scissors") {
    return "scissors";
  } else {
    return "paper";
  }
}

rockButton.addEventListener("click", () => {
  humanChoice = getHumanChoice("rock");
  humanChoiceDisplay.textContent = `You choose ${humanChoice}`;
});

scissorsButton.addEventListener("click", () => {
  humanChoice = getHumanChoice("scissors");
  humanChoiceDisplay.textContent = `You choose ${humanChoice}`;
});

paperButton.addEventListener("click", () => {
  humanChoice = getHumanChoice("paper");
  humanChoiceDisplay.textContent = `You choose ${humanChoice}`;
});

function playRound(human, computer) {
  count++;
  let result;

  if (human === computer) {
    result = "The game is tied";
    humanChoiceDisplay.textContent = "Make another choice";
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")
  ) {
    result = `You won! ${human} beats ${computer}`;
    humanScore++;
    humanChoiceDisplay.textContent = "Make another choice";
  } else {
    result = `You lose, computer wins! ${computer} beats ${human}`;
    computerScore++;
    humanChoiceDisplay.textContent = "Make another choice";
  }

  displayResult.textContent = result;
  displayScore.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

  resultDiv.appendChild(displayResult);
  resultDiv.appendChild(displayScore);
}

function playGame() {
  resultDiv.classList.add("result-style");

  displayResult.textContent = "";
  displayScore.textContent = "";

  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  gameScore();
}

function gameScore() {
  
  if (count === 3) {
    if (humanScore > computerScore) {
      alert(
        `You won the game!\n Human Score: ${humanScore}\n Computer Score: ${computerScore}\n Start another around`
      );
    } else if (humanScore < computerScore) {
      alert(
        `You lost the game!\n Human Score: ${humanScore}\n Computer Score: ${computerScore}\n Start another around`
      );
    } else {
      alert(
        `it's a tie\n Human Score: ${humanScore}\n Computer Score: ${computerScore}\n Start another around`
      );
    }

    humanScore = 0;
    computerScore = 0;
    displayResult.textContent = "Start another round ";
    displayScore.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
    count = 0;

    //   console.log(humanScore, computerScore);
    // }
  }
}

const startGame = document.querySelector(".playGame");

startGame.addEventListener("click", () => {
  if (!humanChoice) {
    alert("Please make a choice first!");
  } else {
    playGame();
  }
});
