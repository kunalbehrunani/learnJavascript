//The user will be able to input a question, then our program will output a random fortune.
let userName = '';
(userName==='')?(console.log('Hello!')):(console.log(`Hello, ${userName}!`));
let userQuestion='Will I become a proficient Javascript Developer by the End of this year?';
console.log(userQuestion);
let randomNumber;
randomNumber = Math.floor(Math.random()*8);
let eightBall = '';
switch(randomNumber){
  case 0:eightBall='It is certain';
        break;
  case 1:eightBall='It is decidedly so';
        break;
  case 2:eightBall='Reply hazy try again';
        break; 
  case 3:eightBall='Cannot predict now';
        break;
  case 4:eightBall='Do not count on it';
        break;
  case 5:eightBall='My sources say no';
        break;
  case 6:eightBall='Outlook not so good';
        break;
  case 7:eightBall='Signs point to yes';
        break;
};
console.log(eightBall);
