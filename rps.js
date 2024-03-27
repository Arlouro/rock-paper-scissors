const container = document.querySelector('#container');

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.id = 'rock';

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.id = 'paper';

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.id = 'scissors';

const choose = document.createElement('h3');
choose.textContent = 'Choose Rock, Paper, or Scissors:';

const resultText = document.createElement('h3');
resultText.textContent = 'Result:';

const result = document.createElement('p');
result.id = 'result';

container.appendChild(choose);
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(resultText);
container.appendChild(result);

rockButton.addEventListener('click', () => {
  result.textContent = playRound('Rock', getComputerChoice());
});

paperButton.addEventListener('click', () => {
  result.textContent = playRound('Paper', getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
  result.textContent = playRound('Scissors', getComputerChoice());
});

/* Functions */
getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

playRound = (userChoice, computerChoice) => {
  userChoice = userChoice.toLowerCase();
  userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

  console.log('You chose: ' + userChoice);
  console.log('The computer chose: ' + computerChoice);

  if (userChoice !== 'Rock' && userChoice !== 'Paper' && userChoice !== 'Scissors') {
    return 'Invalid choice! Please choose Rock, Paper, or Scissors.';
  }
  
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (userChoice === 'Rock' && computerChoice === 'Scissors' ||
             userChoice === 'Paper' && computerChoice === 'Rock' ||
             userChoice === 'Scissors' && computerChoice === 'Paper') {
    return 'You win! ' + userChoice + ' beats ' + computerChoice + '!';
  } else {
    return 'You lose! ' + computerChoice + ' beats ' + userChoice + '!';
  }
}