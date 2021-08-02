//Rock, Paper, Scissors Game - User Manual Input, Computer Input - Random, Determine Winner!
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors'){
    console.log('Invalid Input');
  }
  else console.log(`User Input: ${userInput}.`);
  return userInput;
}//End of getUserChoice Function

const getComputerChoice = () => {
  const index = Math.floor(Math.random()*3);
  const validChoices = ['rock', 'paper', 'scissors'];
  console.log(`Computer Input: ${validChoices[index]}.`);
  return validChoices[index];
}//End of getComputerChoice Function

const determineWinner = (userChoice,computerChoice) => {
  if(userChoice === computerChoice){
    console.log("It's a Tie!");
  }else if( (userChoice==='rock' && computerChoice==='scissors') || (userChoice==='paper' && computerChoice==='rock') || (userChoice==='scissors' && computerChoice==='paper') ){
    console.log('User Won!');
  }else if( (userChoice==='rock' && computerChoice==='paper') || (userChoice==='paper' && computerChoice==='scissors') || (userChoice==='scissors' && computerChoice==='rock')) {
    console.log('Computer Won!');
  }
}//End of determineWinner Function

determineWinner(getUserChoice('paper'),getComputerChoice());


