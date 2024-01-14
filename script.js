let playerScore = 0;
let computerScore = 0; 

const buttons = document.querySelectorAll('button.option');

buttons.forEach((button) => {

button.addEventListener('click', () => {
    playerSelection = button.value; 
    computerSelection = getComputerChoice();
    let results = playRound(playerSelection, computerSelection);
    outcome = results[0];
    reason = results[1];
    playerScore = results[2];
    computerScore = results[3];
    document.getElementById("roundOutcome").innerHTML = outcome;
    document.getElementById("roundReason").innerHTML = reason; 
    document.getElementById("playerScore").innerHTML = "Player: " + playerScore;
    document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
    if (checkWinner(playerScore, computerScore)) {
      document.getElementById("finalResults").innerHTML = "You Won This Game!"
      document.getElementById("rock").setAttribute("disabled", true);
      document.getElementById("paper").setAttribute("disabled", true);
      document.getElementById("scissors").setAttribute("disabled", true);
      playAgain();
    } else if ((checkWinner(playerScore, computerScore)) == false) {
      document.getElementById("finalResults").innerHTML = "You lost This Game..."
      document.getElementById("rock").setAttribute("disabled", true);
      document.getElementById("paper").setAttribute("disabled", true);
      document.getElementById("scissors").setAttribute("disabled", true);
      playAgain();
    }
  });
});

const playAgainButton = document.querySelector('#playAgain');
playAgainButton.addEventListener("click", function() {
  // Refresh the page
  window.location.reload();
});



function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      outcome = `It's a tie!`;
      reason = `${playerSelection} ties with ${computerSelection}`;
      return [outcome, reason, playerScore, computerScore]; 
    }
    else {
      if ((playerSelection == "Rock" && computerSelection == "Paper") ||
      (playerSelection == "Paper" && computerSelection == "Scissors") ||
      (playerSelection == "Scissors" && computerSelection == "Rock")) {
        outcome = `You Lose!`;
        reason = `${computerSelection} beats ${playerSelection}`;
        return [outcome, reason, playerScore, ++computerScore]; 
      }

      if ((playerSelection == "Scissors" && computerSelection == "Paper") ||
      (playerSelection == "Rock" && computerSelection == "Scissors") ||
      (playerSelection == "Paper" && computerSelection == "Rock")) {
        outcome = `You Win!`;
        reason = `${playerSelection} beats ${computerSelection}`;
        return [outcome, reason, ++playerScore, computerScore]; 
      }
    }
}


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let x = Math.floor(Math.random() * 3);
    let choice = choices[x];
    return choice;
}

function checkWinner(playerScore, computerScore) {
  if (playerScore == 5) {
    return true; 
  } else if (computerScore == 5) {
    return false; 
  } 
 }

 function playAgain() {
  var button = document.getElementById("playAgain");
  button.style.display = "block"; 
 }

 




