getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

playRound = (userChoice, computerChoice) => {
  userChoice = userChoice.toLowerCase();
  userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

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

playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  console.log('You chose: ' + userChoice);
  console.log('The computer chose: ' + computerChoice);
  console.log(playRound(userChoice, computerChoice));
}