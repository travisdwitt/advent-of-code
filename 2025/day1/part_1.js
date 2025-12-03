const fs = require("fs");
const inputs = fs.readFileSync("input.txt", "utf8")
  .trim()
  .split(/\r?\n/);
// console.log(inputs);

/*
    __       ./{HO! HO! HO!}
    | \__ `\O/  `--  {}    \}    {/
    \    \_(~)/______/=____/=____/=*
     \=======/    //\\  >\/> || \> 
    ----`---`---  `` `` ```` `` ``
*/
  
let [current, count] = [50, 0];

for (const input of inputs) {
  const rotation = {
    direction: input[0],
    value: Number(input.slice(1)),
  };

  current = rotation.direction === 'L'
    ? (current - rotation.value) % 100
    : (current + rotation.value) % 100;
  
  if(current === 0){
    count ++;
  }
}

console.log("password:", count);
