function getComputerChoice() {
    let a = Math.random()
    if (a < 0.33) return "ROCK"
    if (a < 0.66) return "PAPER"
    if (a >= 0.66) return "SCISSORS" 
    
}
let humanScore = 0;
let compScore = 0;

function showResult(winner){
  let res = document.querySelector('.Table');
  let res1 = document.createElement('p');

  if (winner == 'Computer') { compScore++; 
    res1.textContent = `You Lost! Score is ${humanScore} to ${compScore};`}
  else if (winner == 'Human') { humanScore++;
    res1.textContent = `You Won! Score is ${humanScore} to ${compScore};`}
  else if (winner == 'Draw'){
    res1.textContent = `It was a Draw! Score is ${humanScore} to ${compScore};`
  }
  res.appendChild(res1);
  }


function playRound(human , comp, humanScore, compScore) {

  if ((human == "ROCK" && comp == "PAPER")|| (human == "PAPER" && comp == "SCISSORS")||( human == "SCISSORS" && comp == "ROCK")) {
  console.log("You Lose");
  let winner = 'Computer';
  showResult(winner);}
  else if ((human == "ROCK" && comp == "SCISSORS")|| (human == "PAPER" && comp == "ROCK")|| (human == "SCISSORS" && comp == "PAPER")) { console.log("You Win") 
    winner = 'Human';
    showResult(winner);
  }
  else if (human == comp) {console.log("It was a draw, another round");
    winner = 'Draw';
    showResult(winner);
  }
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