const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n')
const ranges = [];
const ids = [];

/*
           _..._
         .'\\ //`,
        /\\.'``'.=",
       / \/     ;==|
      /\\/    .'\`,`
     / \/     `""`
    /\\/
   /\\/
  /\ /
 /\\/
/`\/
\\/
 `
*/

let inRanges = true;
for (const line of input) {
  if (line === '') {
    inRanges = false;
    continue;
  }

  if (inRanges) {
    const [start, end] = line.split('-').map(Number);
    ranges.push([start, end]);
  } else {
    ids.push(Number(line));
  }
}

let count = 0;
for (const id of ids) {
  for (const [start, end] of ranges) {
    if (id >= start && id <= end) {
      count++;
      break;
    }
  }
}

console.log(count);
