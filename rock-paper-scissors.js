const ROCK_VALUE = 1;
const PAPER_VALUE = 2;
const SCISSORS_VALUE = 3;

const DRAW = 0;
const PLAYER_WINS = 1;
const COMPUTER_WINS = 2;

const NUMBER_OF_POINTS_TO_WIN_GAME = 5;

const inputButtons = document.querySelectorAll(".input-button");
const playerScoreValue = document.querySelector(".player-score-value");
const computerScoreValue = document.querySelector(".computer-score-value");
const computerChoiceText = document.querySelector(".computer-choice-text");
const victoryStatusText = document.querySelector(".victory-status-text");
const finalWinnerText = document.querySelector(".final-winner-text");
const resetButton = document.querySelector(".reset-button");

function getComputerChoice() {
  return Math.trunc(Math.random() * 10) % 3 + 1;
}

function getPlayerChoice(choiceAsString) {
  let choiceAsNumber;
  switch (choiceAsString) {
    case 'rock':
      choiceAsNumber = ROCK_VALUE;
      break;
    case 'paper':
      choiceAsNumber = PAPER_VALUE;
      break;
    case 'scissors':
      choiceAsNumber = SCISSORS_VALUE;
      break;
    default:
      choiceAsNumber = null
  }

  return choiceAsNumber;
}

function playRound(playerChoice, computerChoice) {
  let winner;

  if (Math.abs(playerChoice - computerChoice) === 1) {
    if (playerChoice > computerChoice) { //Player chooses paper and pc chooses rock OR player chooses scissors and pc chooses paper
      winner = PLAYER_WINS;
    } else { //Player chooses rock and pc chooses paper OR player chooses paper and pc chooses scissors
      winner = COMPUTER_WINS;
    }
  } else {
    if (playerChoice < computerChoice) { //Player chooses rock, computer chooses scissors
      winner = PLAYER_WINS;
    } else if (playerChoice > computerChoice) { //Player chooses scissors, computer chooses rock
      winner = COMPUTER_WINS;
    } else { //Draw
      winner = DRAW;
    }
  }

  updateScore(winner);
  displayRoundWinner(playerChoice, computerChoice, winner);
}

function displayRoundWinner(playerChoice, computerChoice, victoryStatus) {
  let playerChoiceAsString = convertChoiceToString(playerChoice);
  let computerChoiceAsString = convertChoiceToString(computerChoice);

  computerChoiceText.textContent = `Computer chose ${computerChoiceAsString}.`;
  if (victoryStatus === DRAW) {
    victoryStatusText.textContent = `Draw!`;
  } else if (victoryStatus === PLAYER_WINS) {
    victoryStatusText.textContent = `You win! ${playerChoiceAsString} beats ${computerChoiceAsString}.`;
  } else {
    victoryStatusText.textContent = `You lose! ${computerChoiceAsString} beats ${playerChoiceAsString}.`;
  }
}

function convertChoiceToString(choice) {
  let choiceAsString;

  switch (choice) {
    case ROCK_VALUE:
      choiceAsString = 'rock';
      break;
    case PAPER_VALUE:
      choiceAsString = 'paper';
      break;
    case SCISSORS_VALUE:
      choiceAsString = 'scissors';
      break;
    default:
      choiceAsString = null;
  }

  return choiceAsString;
}

function checkFinalWinner(playerScore, computerScore) {
  if (playerScore >= NUMBER_OF_POINTS_TO_WIN_GAME) {
    finalWinnerText.textContent = `You are the final winner!`;
    resetButton.style.visibility = "visible";
  } else if (computerScore >= NUMBER_OF_POINTS_TO_WIN_GAME) {
    finalWinnerText.textContent = `The computer is the final winner!`;
    resetButton.style.visibility = "visible";
  }
}

function updateScore(roundWinner) {
  if (roundWinner === PLAYER_WINS) {
    let currentScore = Number(playerScoreValue.textContent);
    currentScore += 1;
    playerScoreValue.textContent = currentScore;
  } else if (roundWinner === COMPUTER_WINS) {
    let currentScore = Number(computerScoreValue.textContent);
    currentScore += 1;
    computerScoreValue.textContent = currentScore;
  }
}

function resetGame() {
  // Reset scores to 0
  playerScoreValue.textContent = 0;
  computerScoreValue.textContent = 0;

  // Clear output
  computerChoiceText.textContent = "";
  victoryStatusText.textContent = "";
  finalWinnerText.textContent = "";

  resetButton.style.visibility = "hidden";
}

function playerChooses(event) {
  //Get player and computer choices
  const playerChoice = getPlayerChoice(event.target.className.split(" ")[1]);
  const computerChoice = getComputerChoice();

  // Start a round
  playRound(playerChoice, computerChoice)

  // Check for final winner
  checkFinalWinner(Number(playerScoreValue.textContent), Number(computerScoreValue.textContent));
}

/* ************Main Code************ */
resetButton.style.visibility = "hidden";

inputButtons.forEach(button => {
  button.addEventListener('click', playerChooses);
})

resetButton.addEventListener('click', resetGame);

