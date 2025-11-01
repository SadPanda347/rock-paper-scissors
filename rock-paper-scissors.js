function getComputerChoice() {
  let choiceAsNumber = Math.trunc(Math.random() * 10) % 3;

  let choice = null;
  switch (choiceAsNumber) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
      break;
  }
  return choice;
}

function getHumanChoice() {
  // Prompt user for a choice
  let choice = prompt("Enter rock, paper or scissors: ");

  if (choice != 'rock' && choice !== 'paper' && choice != 'scissors') {
    choice = null;
  }

  return choice;
  // If choice is rock, paper or scissors 
  //   return it
  // Else
  //   Tell user input was invalid
  //   return null 
}

function testGetComputerChoice() {
  for (let i = 0; i < 25; i++) {
    let choice = getComputerChoice();
    console.log(`Choice at Interation ${i + 1}: ${choice}`);
  }
}

// testGetComputerChoice();

let choice = true;

while (choice !== null) {
  choice = getHumanChoice();
  console.log(`Your choice: ${choice}`);
}