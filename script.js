let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => Math.floor(Math.random()*10);


const compareGuesses =(humanGuess , computerGuess , secretTargetNum) =>{
  console.log(secretTargetNum);
  if (Math.abs(humanGuess - secretTargetNum) === Math.abs(computerGuess - secretTargetNum)){
    return true;
  } if (Math.abs(humanGuess - secretTargetNum) < Math.abs(computerGuess - secretTargetNum)){
    return true;
  } else {
    return false;
  }
}


const updateScore = winner =>{
  if (winner === 'human') {
    humanScore++;
  }else {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
