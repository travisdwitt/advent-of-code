const fs = require("fs");
const coords = fs.readFileSync("input.txt", "utf8")
  .trim()
  .split('\n')
  .map(line => {
    const match = line.match(/(\d+),(\d+)/);
    return match ? [parseInt(match[1]), parseInt(match[2])] : null;
  })
  .filter(coord => coord !== null);

let biggestBoi = 0;

for (let i = 0; i < coords.length; i++) {
  for (let j = i + 1; j < coords.length; j++) {
    const [x1, y1] = coords[i];
    const [x2, y2] = coords[j];
    const width = Math.abs(x2 - x1) + 1;
    const height = Math.abs(y2 - y1) + 1;
    const square = width * height;
    if (square > biggestBoi) {
      biggestBoi = square;
    }
  }
}

console.log(biggestBoi);

