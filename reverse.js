const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverse(word)
{
let n=word.length;
for(let i=n-1;i>=0;i--)
{
console.log(word[i]);

}

}




rl.question('Enter a word: ', (userInput) => {
  let word = (userInput);
reverse(word);
  rl.close();
});
