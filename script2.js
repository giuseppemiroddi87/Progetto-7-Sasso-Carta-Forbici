const result = document.querySelector('.result')
const humanScore = document.getElementById('human-score')
const machineScore = document.getElementById('machine-score')
const resetButton = document.getElementById('reset')
const winnerImage = document.querySelector('.winner-image')

let humanScoreNumber = 0
let machineScoreNumber = 0


/* 
humanScoreNumber -> Camel Case
GAME_OPTIONS -> Snake Case in enum uso questo di solito
*/

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR: 'scissor'
}

let gameOver = false

const playHuman = (humanChoice) => {
    console.log(playMachine());
    if (gameOver === true) {
        return
    }
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSOR]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'Pareggio'
    } else if ((human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSOR) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSOR && machine === GAME_OPTIONS.PAPER)
    ){
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Hai fatto punto!'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Ha fatto punto Alexa!'
    }
    if (humanScoreNumber === 3) {
        gameOver = true
        result.innerHTML = 'HAI VINTO!'
        winnerImage.innerHTML = '&#x1F3C6'
        resetButton.style.display = 'block'
    }

     if (machineScoreNumber === 3) {
        gameOver = true
        result.innerHTML = 'HAI PERSO!'
        winnerImage.innerHTML = '&#x1F916'
        resetButton.style.display = 'block'
    }

}

const resetBtn = () => {

    humanScoreNumber = 0
    machineScoreNumber = 0

    machineScore.innerHTML = 0 
    humanScore.innerHTML = 0

    result.innerHTML = ''
    winnerImage.innerHTML = ''

    gameOver = false

    resetButton.style.display = 'none'
}