// Function to get the computer's choice randomly
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to determine the winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  // Function to generate rocket animation
  function generateRockets() {
    const rocketContainer = document.getElementById('rockets');
    for (let i = 0; i < 5; i++) {
      const rocket = document.createElement('div');
      rocket.classList.add('rocket');
      rocket.style.left = `${Math.random() * 100}vw`; // Random position
      rocketContainer.appendChild(rocket);
  
      // Remove the rocket after animation
      setTimeout(() => rocket.remove(), 2000);
    }
  }
  
  // Function to handle the user's choice and display the result
  function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(userChoice, computerChoice);
  
    // Update the result section
    document.getElementById('user-choice').textContent = `Your choice: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;
    document.getElementById('result-message').textContent = resultMessage;
  
    // Highlight the result box if the user wins
    const resultBox = document.querySelector('.game-container');
    if (resultMessage === "You win!") {
      resultBox.classList.add('highlight-win');
      generateRockets(); // Show rockets if user wins
    } else {
      resultBox.classList.remove('highlight-win');
    }
  
    // Trigger fade-in animation for result
    document.getElementById('user-choice').style.animation = 'fadeIn 1s ease-out forwards';
    document.getElementById('computer-choice').style.animation = 'fadeIn 1s ease-out forwards';
    document.getElementById('result-message').style.animation = 'fadeIn 1s ease-out forwards';
  }
  
  // Adding event listeners to the buttons
  document.getElementById('rock').addEventListener('click', () => playGame('rock'));
  document.getElementById('paper').addEventListener('click', () => playGame('paper'));
  document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
  