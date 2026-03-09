const result = document.querySelector('.result')
const humanScore = document.getElementById('human-score')
const machineScore = document.getElementById('machine-score')
const resetBtn = document.getElementById('reset')
const winnerImage = document.querySelector('.winner-image')

let gameOver = false


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    if(gameOver === true){
        return // blocca il gioco
    }

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Pareggio"
    } 
    else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissor') ||
        (human === 'scissor' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Punto Tuo"
    } 
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Punto di Alexa"
    }

    /* CONTROLLO VITTORIA FINALE */
    if (humanScoreNumber === 3) {
        gameOver = true
        result.innerHTML = "🏆 HAI VINTO!"
        winnerImage.innerHTML = "&#x1F3C6"
        resetBtn.style.display = "block"
    }

    if (machineScoreNumber === 3) {
        gameOver = true
        result.innerHTML = "🤖 ALEXA HA VINTO!"
        winnerImage.innerHTML = "&#x1F916"
        resetBtn.style.display = "block"
    }
}

resetBtn.addEventListener('click', () => {

    humanScoreNumber = 0
    machineScoreNumber = 0

    humanScore.innerHTML = 0
    machineScore.innerHTML = 0

    result.innerHTML = ""
    winnerImage.innerHTML = ""

    gameOver = false

    resetBtn.style.display = "none"
})



