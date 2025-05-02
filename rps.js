function getComputerChoice() {
    let a = Math.random()
    if (a < 0.33) return "ROCK"
    if (a < 0.66) return "PAPER"
    if (a > 0.66) return "SCISSORS" 
    
}

function getHumanChoice() {
    let a = prompt("rock paper or scissors?")
    return a.toUpperCase()
}



function playRound(human , comp, humanScore, compScore) {

  if ((human == "ROCK" && comp == "PAPER")|| (human == "PAPER" && comp == "SCISSORS")||( human == "SCISSORS" && comp == "ROCK")) {
  console.log("You Lose")
  return 0 ; }
  else if ((human == "ROCK" && comp == "SCISSORS")|| (human == "PAPER" && comp == "ROCK")|| (human == "SCISSORS" && comp == "PAPER")) { console.log("You Win") 
  return 1; }
  else if (human == comp) console.log("It was a draw, another round");
  else console.log("debug");

}

function playGame() {
    let humanScore = 0
    let compScore = 0

let human = getHumanChoice()
console.log(`You chose ${human}`)
let comp = getComputerChoice()
let a = playRound(human, comp, humanScore, compScore)
console.log(`Computer chose ${comp}`)
if (a == 0) compScore++;
else if (a == 1) humanScore++;

human = getHumanChoice()
console.log(`You chose ${human}`)
comp = getComputerChoice()
a = playRound(human, comp, humanScore, compScore)
console.log(`Computer chose ${comp}`)
if (a == 0) compScore++;
else if (a == 1) humanScore++;

human = getHumanChoice()
console.log(`You chose ${human}`)
comp = getComputerChoice()
a = playRound(human, comp, humanScore, compScore)
console.log(`Computer chose ${comp}`)
if (a == 0) compScore++;
else if (a == 1) humanScore++;

human = getHumanChoice()
console.log(`You chose ${human}`)
comp = getComputerChoice()
a = playRound(human, comp, humanScore, compScore)
console.log(`Computer chose ${comp}`)
if (a == 0) compScore++;
else if (a == 1)humanScore++;

human = getHumanChoice()
console.log(`You chose ${human}`)
comp = getComputerChoice()
a = playRound(human, comp, humanScore, compScore)
console.log(`Computer chose ${comp}`)
if (a == 0) compScore++;
else if (a == 1) humanScore++;

console.log(humanScore)
console.log(compScore)

}

playGame()