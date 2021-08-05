/*
Whale Talk

Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

    There are no consonants. Only vowels excluding “y”.
    The u‘s and e‘s are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean. 
*/

let input = 'Hi, Human';

const vowels = ['A', 'E', 'I', 'O', 'U'];

let resultArray = [];

for(let i = 0; i< input.length ; i++){
  let temp = input[i].toUpperCase();
  if(vowels.indexOf(temp)!==-1){
    if(temp==='E' || temp==='U')
      temp+=temp;
    resultArray.push(temp);
  }
}

const computerOutput = 'IUUA';
const myOutput = resultArray.join('');
if(myOutput===computerOutput)
console.log(`Your program is working absolutely fine!`);


