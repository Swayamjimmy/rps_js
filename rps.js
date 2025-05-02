function getComputerChoice() {
    let a = Math.random()
    if (a < 0.33) return "rock"
    if (a < 0.66) return "paper"
    if (a > 0.66) return "scissors" 
}


function getHumanChoice() {
    let a = prompt("rock paper or scissors?")
    return a
}


let humanScore = 0
let compScore = 0

function playRound(human , comp) {

  human = human.toUpperCase()
  comp = comp.toUpperCase()

  if ((human == "ROCK" && comp == "PAPER")|| (human == "PAPER" && comp == "SCISSORS")||( human == "SCISSORS" && comp == "ROCK")) {
    console.log("You Lose")
    compScore++; }
  else if ((human == "ROCK" && comp == "SCISSORS")|| (human == "PAPER" && comp == "ROCK")|| (human == "SCISSORS" && comp == "PAPER")) { console.log("You Win") 
  humanScore++; }
  else if (human == comp) console.log("It was a draw, another round");
  else console.log("debug");

}

let human = getHumanChoice()
console.log(`You chose ${human}`)
let comp = getComputerChoice()


playRound(human, comp)
console.log(`Computer chose ${comp}`)


