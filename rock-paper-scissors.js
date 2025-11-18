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

  displayRoundWinner(playerChoice, computerChoice, winner);
  return winner;
}

function displayRoundWinner(playerChoice, computerChoice, victoryStatus) {
  let playerChoiceAsString = convertChoiceToString(playerChoice);
  let computerChoiceAsString = convertChoiceToString(computerChoice);

  computerChoiceText.textContent = `Computer chose ${computerChoiceAsString}`;
  if (victoryStatus === DRAW) {
    victoryStatusText.textContent = `Draw!`;
  } else if (victoryStatus === PLAYER_WINS) {
    victoryStatusText.textContent = `You win! ${playerChoiceAsString} beats ${computerChoiceAsString}.`;
  } else {
    victoryStatusText.textContent = `You lose! ${computerChoiceAsString} beats ${playerChoiceAsString}`;
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

function declareGameWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("You are the final winner!");
  } else if (computerScore > playerScore) {
    console.log("The computer is the final winner!");
  } else {
    console.log("No one won!");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let playerChoice;
  let computerChoice;
  let roundWinner;

  for (let round = 0; round < 5; round++) {
    console.log(`Round ${round + 1}`);

    playerChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    console.log(`You chose ${convertChoiceToString(playerChoice)}.`);
    console.log(`The computer chose ${convertChoiceToString(computerChoice)}.`);

    roundWinner = playRound(playerChoice, computerChoice);

    if (roundWinner === PLAYER_WINS) {
      humanScore += 1;
    } else if (roundWinner === COMPUTER_WINS) {
      computerScore += 1;
    }

    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log("*************************************\n\n")
  }

  declareGameWinner(humanScore, computerScore);
}

function playerChooses(event) {
  const playerChoice = getPlayerChoice(event.target.className.split(" ")[1]);
  const computerChoice = getComputerChoice();
  console.log(playRound(playerChoice, computerChoice));
}

/* ************Main Code************ */
const ROCK_VALUE = 1;
const PAPER_VALUE = 2;
const SCISSORS_VALUE = 3;

const DRAW = 0;
const PLAYER_WINS = 1;
const COMPUTER_WINS = 2;

const inputButtons = document.querySelectorAll(".input-button");
const playerScoreText = document.querySelector(".player-score-text");
const computerScoreText = document.querySelector(".computer-score-text");
const computerChoiceText = document.querySelector(".computer-choice-text");
const victoryStatusText = document.querySelector(".victory-status-text");

inputButtons.forEach(button => {
  button.addEventListener('click', playerChooses);
})


