const ROCK_VALUE = 1;
const PAPER_VALUE = 2;
const SCISSORS_VALUE = 3;

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

function testGetComputerChoice() {
  for (let i = 0; i < 25; i++) {
    let choice = getComputerChoice();
    console.log(`Choice at Interation ${i + 1}: ${choice}`);
  }
}

function playRound(playerChoice, computerChoice) {
  let winner;
  return winner;
}

// testGetComputerChoice();


let choice = true;
while (choice !== null) {
  choice = getHumanChoice();
  console.log(`Your choice: ${choice}`);
}

let humanScore = 0;
let computerScore = 0;





