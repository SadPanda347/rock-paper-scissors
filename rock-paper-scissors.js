const ROCK_VALUE = 1;
const PAPER_VALUE = 2;
const SCISSORS_VALUE = 3;

const DRAW = 0;
const PLAYER_WINS = 1;
const COMPUTER_WINS = 2;

function getComputerChoice() {
  return Math.trunc(Math.random() * 10) % 3 + 1;
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper or scissors: ");
  choice = choice.toLowerCase();

  let choiceAsNumber;
  switch (choice) {
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
      winner = 1;
    } else { //Player chooses rock and pc chooses paper OR player chooses paper and pc chooses scissors
      winner = 2;
    }
  } else {
    if (playerChoice < computerChoice) { //Player chooses rock, computer chooses scissors
      winner = 1;
    } else if (playerChoice > computerChoice) { //Player chooses scissors, computer chooses rock
      winner = 2;
    } else { //Draw
      winner = 0;
    }
  }

  displayWinner(playerChoice, computerChoice, winner);
  return winner;
}

function displayWinner(playerChoice, computerChoice, victoryStatus) {
  let playerChoiceAsString = convertChoiceToString(playerChoice);
  let computerChoiceAsString = convertChoiceToString(computerChoice);

  if (victoryStatus === DRAW) {
    console.log("Draw!");
  } else if (victoryStatus === PLAYER_WINS) {
    console.log(`You win! ${playerChoiceAsString} beats ${computerChoiceAsString}.`)
  } else {
    console.log(`You lose! ${computerChoiceAsString} beats ${playerChoiceAsString}`);
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

function testGetComputerChoice() {
  for (let i = 0; i < 25; i++) {
    let choice = getComputerChoice();
    console.log(`Choice at Interation ${i + 1}: ${choice}`);
  }
}

function testPlayRound() {
  let result;

  console.log("Testing Draws");
  result = playRound(1, 1);
  console.log(`Result: ${result}\nPlayer Choice: rock\nComputer Choice: rock\n**********`);

  result = playRound(2, 2);
  console.log(`Result: ${result}\nPlayer Choice: paper\nComputer Choice: paper\n**********`);

  result = playRound(3, 3);
  console.log(`Result: ${result}\nPlayer Choice: scissors\nComputer Choice: scissors\n**********`);

  console.log("Testing player victory");
  result = playRound(1, 3);
  console.log(`Result: ${result}\nPlayer Choice: rock\nComputer Choice: scissors\n**********`);

  result = playRound(2, 1);
  console.log(`Result: ${result}\nPlayer Choice: paper\nComputer Choice: rock\n**********`);

  result = playRound(3, 2);
  console.log(`Result: ${result}\nPlayer Choice: scissors\nComputer Choice: paper\n**********`);

  console.log("Testing player loss");
  result = playRound(1, 2);
  console.log(`Result: ${result}\nPlayer Choice: rock\nComputer Choice: paper\n**********`);

  result = playRound(2, 3);
  console.log(`Result: ${result}\nPlayer Choice: paper\nComputer Choice: scissors\n**********`);

  result = playRound(3, 1);
  console.log(`Result: ${result}\nPlayer Choice: scissors\nComputer Choice: rock\n**********`);
}

/* ************Testing************ */
// testGetComputerChoice();

/*let choice = true;
while (choice !== null) {
  choice = getHumanChoice();
  console.log(`Your choice: ${choice}`);
}*/

//testPlayRound();


/* ************Main Code************ */
playGame();



