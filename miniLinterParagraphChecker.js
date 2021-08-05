/*
This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter
*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
console.log(storyWords.length);
const betterWords = storyWords.filter(element=>!unnecessaryWords.includes(element));
console.log(betterWords.length);

const result = {
  words : [], 
  counts : []
};
betterWords.forEach( (element) => {
  if(overusedWords.includes(element)){
    if(result.words.includes(element)){
      let index = result.words.indexOf(element);
      result.counts[index]++;
    }else{
      result.words.push(element);
      result.counts.push(1);
    }
  }
} ); 
console.log('The overused words and their counts are as follows: ');
for(let i = 0; i< result.words.length; i++){
  console.log(`${result.words[i]} - ${result.counts[i]}`);
}

console.log('The number of sentences in the above paragraph are: ');
console.log(betterWords.reduce( (periods,element,currIndex)=>{
  if(currIndex===0) 
    period = 0;
  if(element[element.length-1]==='.' || element[element.length-1]==='!') 
    periods++;
  return periods;
},0 ));

console.log(betterWords.join(' '));

/*
Here are some additional ideas:

    For the overused words, remove it every other time it appears.

    Write a function that finds the word that appears the greatest number of times.

    Replaced overused words with something else.

*/
