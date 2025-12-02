const fs = require("fs");
const inputs = fs.readFileSync("input.txt", "utf8")
  .trim()
  .split(/\r?\n/);

//  __       ./{HO! HO! HO!}
//  | \__ `\O/  `--  {}    \}    {/
//  \    \_(~)/______/=____/=____/=*
//   \=======/    //\\  >\/> || \> 
//  ----`---`---  `` `` ```` `` ``
 
console.log(inputs);
let [current, count] = [50, 0];

for (const input of inputs) {
  const start = current;
  const rotation = {
    direction: input[0],
    value: Number(input.slice(1)),
  };

  for(let i = 0; i< rotation.value; i++){
    current = rotation.direction === 'L'
      ? (current - 1 + 100) % 100
      : (current + 1) % 100;
    if(current === 0){
      count++;
    }
  }
}

console.log("password:", count);
