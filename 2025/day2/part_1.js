const fs = require("fs");
const inputs = fs.readFileSync("input.txt", "utf8").split(',');
console.log(inputs);

/*
       .-.                                                   \ /
      ( (                                |                  - * -
       '-`                              -+-                  / \
                \            o          _|_          \
                ))          }^{        /___\         ))
              .-#-----.     /|\     .---'-'---.    .-#-----.
         ___ /_________\   //|\\   /___________\  /_________\  
        /___\ |[] _ []|    //|\\    | A /^\ A |    |[] _ []| _.O,_
    ....|"#"|.|  |*|  |...///|\\\...|   |"|   |....|  |*|  |..(^)....
*/

let total = 0;
for (const input of inputs){
  const range = input.split('-');
  const [min, max] = [parseInt(range[0]), parseInt(range[1])];
  for(let i = min; i <= max; i++){
    const value = i.toString();
    const length = value.length;

    if(length % 2 === 0){
      const half = Math.floor(length/2);
      const [a, b] = [
        value.slice(0, half),
        value.slice(half)
      ];
      if(a == b){
        total += i;
      }      
    }
  }
}

console.log(total);
