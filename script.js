// Selecting elements
const buttons = document.querySelectorAll('.button-container button');
const message = document.getElementById('message');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');

// Initializing scores
let userScore = 0;
let computerScore = 0;

// Event listeners for button clicks
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Get user's choice
        const userChoice = this.id;
        // Get computer's choice
        const computerChoice = getComputerChoice();
        // Determine the winner
        const winner = determineWinner(userChoice, computerChoice);
        // Update the score
        updateScore(winner);
        // Display the result message
        displayMessage(winner, userChoice, computerChoice);
    });
});

// Function to generate computer's choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (userChoice === 'rock') {
        return computerChoice === 'scissors' ? 'user' : 'computer';
    } else if (userChoice === 'paper') {
        return computerChoice === 'rock' ? 'user' : 'computer';
    } else if (userChoice === 'scissors') {
        return computerChoice === 'paper' ? 'user' : 'computer';
    }
}

// Function to update the score
function updateScore(winner) {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

// Function to display the result message
function displayMessage(winner, userChoice, computerChoice) {
    let messageText;
    if (winner === 'tie') {
        messageText = "It's a tie!";
    } else if (winner === 'user') {
        messageText = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        messageText = `Computer wins! ${computerChoice} beats ${userChoice}.`;
    }
    message.textContent = messageText;
}
