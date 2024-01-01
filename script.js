console.log(game());

function playRound(playerSelection, computerSelection) {
    // capitalize first letter, make rest lowercase
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.toLowerCase();
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    let message, player_points = 0, computer_points = 0; 

    // case of tie 
    if (playerSelection == computerSelection) {
      message = "It's a tie!"
      player_points = 1; 
      return [message, player_points, computer_points]; 
    }

    // case of different choices 
    else {
      if ((playerSelection == "Rock" && computerSelection == "Paper") ||
      (playerSelection == "Paper" && computerSelection == "Scissors") ||
      (playerSelection == "Scissors" && computerSelection == "Rock")) {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`;  
        computer_points = 1; 
        return [message, player_points, computer_points]; 
      }

      if ((playerSelection == "Scissors" && computerSelection == "Paper") ||
      (playerSelection == "Rock" && computerSelection == "Scissors") ||
      (playerSelection == "Paper" && computerSelection == "Rock")) {
        message = `You Win! ${playerSelection} beats ${computerSelection}`;  
        player_points = 1; 
        return [message, player_points, computer_points]; 
      }
    }
  }


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let x = Math.floor(Math.random() * 3);
    let choice = choices[x];
    return choice;
}


// 5 rounds are played 
function game() {
  let player_points = 0, computer_points = 0; 
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose between rock, paper and scissors.", "");
    const computerSelection = getComputerChoice();
    player_points += Number(playRound(playerSelection, computerSelection)[1]);
    computer_points += Number(playRound(playerSelection, computerSelection)[2]);
    alert(playRound(playerSelection, computerSelection)[0]);
  }

  // compare points between player and computer 
  if (player_points == computer_points) {
    alert("It's a tie!");
  } else if (player_points > computer_points) {
    alert("You win!");
  } else {
    alert("You lose...");
  }
}

