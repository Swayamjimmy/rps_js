function getComputerChoice() {
    let a = Math.random()
    if (a < 0.33) return "ROCK"
    if (a < 0.66) return "PAPER"
    if (a >= 0.66) return "SCISSORS" 
    
}

function playRound(human , comp, humanScore, compScore) {

  if ((human == "ROCK" && comp == "PAPER")|| (human == "PAPER" && comp == "SCISSORS")||( human == "SCISSORS" && comp == "ROCK")) {
  console.log("You Lose") }
  else if ((human == "ROCK" && comp == "SCISSORS")|| (human == "PAPER" && comp == "ROCK")|| (human == "SCISSORS" && comp == "PAPER")) { console.log("You Win") }
  else if (human == comp) console.log("It was a draw, another round");
  else console.log("debug");

}
  let check = document.querySelectorAll('#btn');
  check.forEach((button) => {
    button.addEventListener('click', () => {
    console.log(button.textContent);
    let humanChoice = button.textContent;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    })
  })