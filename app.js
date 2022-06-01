const controls = document.querySelector(".controls");
controls.addEventListener("click", game);

let counter = 0;
let playerScore = 0;
let computerScore = 0;

function computersPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  return randomNumber === 1
    ? "rock"
    : randomNumber === 2
    ? "paper"
    : "scissors";
}

function playRound(playersChoice, computersChoice) {
  const result = document.querySelector(".result");
  let player = playersChoice;
  let computer = computersChoice.toLowerCase();
  if (player === computer) {
    return [
      (result.textContent = `Result: It's a tie! You both picked ${player.toUpperCase()}`),
      null,
    ];
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return [
      (result.textContent = `Result: You've won! ${player.toUpperCase()} beats ${computer.toUpperCase()}`),
      true,
    ];
  } else {
    return [
      (result.textContent = `Result: You've lost! ${player.toUpperCase()} loses to ${computer.toUpperCase()}`),
      false,
    ];
  }
}

function game(e) {
  let round = document.querySelector("#inc");
  let outputContainer = document.querySelector(".output");
  round.textContent = `Current round: ${++counter}`;

  let playersSelection = e.target.value;
  let computerSelection = computersPlay();
  let output = playRound(playersSelection, computerSelection);

  if (output[1] === true) {
    output[0];
    playerScore += 1;
  } else if (output[1] === false) {
    output[0];
    computerScore += 1;
  } else {
    output[0];
    computerScore += 1;
    playerScore += 1;
  }

  let winner = document.createElement("div");
  winner.classList.add("winner");

  if (counter == 5) {
    if (playerScore > computerScore) {
      outputContainer.appendChild(winner);
      winner.textContent = "You won!";
    } else if (computerScore === playerScore) {
      outputContainer.appendChild(winner);
      winner.textContent = "Tie!";
    } else {
      outputContainer.appendChild(winner);
      winner.textContent = "You lost!";
    }
    counter = 0;
  } else if (counter == 1) {
    let winner = document.querySelector(".winner");
    if (winner) {
      outputContainer.removeChild(winner);
    }
  }
}
