let playerScore = 0;
let computerScore = 0; 

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

button.addEventListener('click', () => {
    playerSelection = button.value; 
    computerSelection = getComputerChoice();
    let results = playRound(playerSelection, computerSelection);
    message = results[0];
    playerScore = results[1];
    computerScore = results[2];
    document.getElementById("results").innerHTML = message;
    document.getElementById("playerScore").innerHTML = "Player: " + playerScore;
    document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
    if (checkWinner(playerScore, computerScore)) {
      button.removeEventListener('click', onclick);
    };
  });
});


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      message = `It's a tie! ${playerSelection} ties with ${computerSelection}`;
      return [message, playerScore, computerScore]; 
    }
    else {
      if ((playerSelection == "Rock" && computerSelection == "Paper") ||
      (playerSelection == "Paper" && computerSelection == "Scissors") ||
      (playerSelection == "Scissors" && computerSelection == "Rock")) {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`;  
        return [message, playerScore, ++computerScore]; 
      }

      if ((playerSelection == "Scissors" && computerSelection == "Paper") ||
      (playerSelection == "Rock" && computerSelection == "Scissors") ||
      (playerSelection == "Paper" && computerSelection == "Rock")) {
        message = `You Win! ${playerSelection} beats ${computerSelection}`;  
        return [message, ++playerScore, computerScore]; 
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
    alert("You won!")
    return true; 
  } else if (computerScore == 5) {
    alert("You lost...")
    return true; 
  } 
 }




