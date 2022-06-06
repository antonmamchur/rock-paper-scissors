const controls = document.querySelector(".controls");
const round = document.querySelector("#inc");

controls.addEventListener("click", game);

let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;

function computersPlay() {
  let random = Math.floor(Math.random() * 3 + 1);
  return random === 1
    ? "rock"
    : random === 2
    ? "paper"
    : "scissors";
}

function playRound(playersChoice, computersChoice) {
  const result = document.querySelector(".result");
  let player = playersChoice;
  let computer = computersChoice;

  //round counter
    round.textContent = `Current round: ${++roundNumber}`;

    //outcome of one round
  if (player === computer) {
      result.textContent = `Result: It's a tie! You both picked ${player.toUpperCase()}`
      computerScore++
      playerScore++

  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
      result.textContent = `Result: You've won! ${player.toUpperCase()} beats ${computer.toUpperCase()}`
      playerScore++
 
  } else {
      result.textContent = `Result: You've lost! ${player.toUpperCase()} loses to ${computer.toUpperCase()}`
      computerScore++

  }
}

function game(e) {
  let playersSelection = e.target.value;
  let computerSelection = computersPlay();
playRound(playersSelection, computerSelection);
gameOver()


}


function gameOver() {
  let winner = document.querySelector(".winner");

  // game result
  if (roundNumber == 5) {
    if (playerScore > computerScore) {
      winner.textContent = "You won!";
      
    } else if (computerScore === playerScore) {
      winner.textContent = "Tie!";

    } else {
      winner.textContent = "You lost!";


    }
    roundNumber = 0;
    playerScore = 0
    computerScore = 0
    
  } 

  // refreshes the game result
  if( roundNumber === 1 ) {
    winner.textContent = ''
  }

}

