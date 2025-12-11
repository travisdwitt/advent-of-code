const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n')
const ranges = [];

for (const line of input) {
  if (line === '') {
    break;
  }
  const [start, end] = line.split('-').map(Number);
  ranges.push([start, end]);
}

ranges.sort((a, b) => a[0] - b[0]);

let mergedRanges = [];
for (const [start, end] of ranges) {
  if (mergedRanges.length === 0 || mergedRanges[mergedRanges.length - 1][1] < start - 1) {
    mergedRanges.push([start, end]);
  } else {
    mergedRanges[mergedRanges.length - 1][1] = Math.max(mergedRanges[mergedRanges.length - 1][1], end);
  }
}

let count = 0;
for (const [start, end] of mergedRanges) {
  count += end - start + 1;
}

console.log(count);
