let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to', 'Program');

secretMessage[secretMessage.indexOf('easily')] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage.splice(secretMessage.indexOf('get'),secretMessage.indexOf('time,')+1-secretMessage.indexOf('get'),'know');

console.log(secretMessage.join(' '));

//print the array without newline
secretMessage.forEach((item,index)=>{
  if(index === secretMessage.length-1)
    process.stdout.write(item+'.');
  else
  process.stdout.write(item + ' ');
});
