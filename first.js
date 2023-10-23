const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (userInput) => {
  let number = parseFloat(userInput);
for(let i=1;i<=number;i++)
{
if(i%2==0)continue;
else
console.log(i);

}
  rl.close();
});
