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
    return 'user';
  }else if( (userChoice==='rock' && computerChoice==='paper') || (userChoice==='paper' && computerChoice==='scissors') || (userChoice==='scissors' && computerChoice==='rock')) {
    return 'computer';
  }
}//End of determineWinner Function

const playGame = (numberOfRounds) => {
  let roundsWonByUser = 0;
  let roundsWonByComputer=0;
  while(numberOfRounds--){
    let index = Math.floor(Math.random()*3);
    let x;
    switch (index) {
      case 0 :x = determineWinner(getUserChoice('paper'),getComputerChoice());
              break;
      case 1 :x = determineWinner(getUserChoice('rock'),getComputerChoice());
              break;
      case 2 :x = determineWinner(getUserChoice('scissors'),getComputerChoice());
              break;
    }
    if(x==='user'){
      roundsWonByUser++;
    }else if(x==='computer'){
      roundsWonByComputer++;
    }
  }//End of While loop
  if(roundsWonByUser===roundsWonByComputer){
    console.log("It's a Tie!");
  }else if(roundsWonByUser > roundsWonByComputer){
    console.log(`User won by ${roundsWonByUser}:${roundsWonByComputer} points!`);
  }else{ 
    console.log(`Computer won by ${roundsWonByComputer}:${roundsWonByUser} points!`);
  }
}//End of playGame Function

playGame(3);
