function computersPlay () {
    let randomNumber = Math.floor(Math.random()*3+1)
    return randomNumber === 1 ? 'rock' : randomNumber === 2 ? 'paper' : 'scissors'
}


function playRound (playersChoice, computersChoice) {
    let player = playersChoice.toLowerCase()
    let computer = computersChoice.toLowerCase()
    if (player === computer ) {
        return [`It's a tie! You both picked ${player.toUpperCase()}`, null]
    } else if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper') {
        return [`You've won! ${player.toUpperCase()} beats ${computer.toUpperCase()}`, true]
    } else {
       return [`You've lost! ${player.toUpperCase()} loses to ${computer.toUpperCase()}`, false]
    }
}


function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) { 
        let playersSelection = prompt('rock, paper, scissors?')
        let computerSelection = computersPlay()
        
        console.log (`Round number: ${i+1}`)

        if (playRound(playersSelection, computerSelection)[1] === true) {
        console.log (playRound(playersSelection, computerSelection)[0])
        playerScore += 1
        } else if  (playRound(playersSelection, computerSelection)[1] === false) {
        console.log (playRound(playersSelection, computerSelection)[0])
        computerScore += 1 } else {
            console.log (playRound(playersSelection, computerSelection)[0])
            computerScore += 1
            playerScore += 1
        }
    } 
    if (playerScore > computerScore) {
        return `You won!`
    } else if (computerScore === playerScore) {
        return 'Tie!'
    } else {
        return 'You Lost!'
    }

}
console.log(game())