const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('Enter a number: ', (userInput) => {
  let number = parseFloat(userInput);
  rl.close();
});
