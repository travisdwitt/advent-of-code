const fs = require("fs");
const inputs = fs.readFileSync("input.txt", "utf8").split(',');
console.log(inputs);

/*
           __
        .-'  |
       /   <\|
      /     \'
      |_.- o-o
      / C  -._)\
     /',        |
    |   `-,_,__,'
    (,,)====[_]=|
      '.   ____/
       | -|-|_
       |____)_)
*/

let total = 0;
for (const input of inputs){
  const range = input.split('-');
  const [min, max] = [parseInt(range[0]), parseInt(range[1])];
  for(let i = min; i <= max; i++){
   total += /^(.+)\1+$/.test(i.toString()) ? i : 0;
  }
}

console.log(total);
