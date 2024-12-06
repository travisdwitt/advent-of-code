// Advent of Code 2024 Day 2: Red-Nosed Reports (Part 1)
import puzzle_data from './input'

let input = puzzle_data.puzzle_data;

function isOrdered(report) {
  const asc = report.every((x, i, rep) => i === 0 || x < rep[i - 1]);
  const desc = report.every((x, i, rep) => i === 0 || x > rep[i - 1]);

  return asc || desc;
}

function inRange(report) {
  return report.every((x, i, rep) => {
    let diff = Math.abs(x - rep[i - 1]);
    return i === 0 ? true : diff >= 1 && diff <= 3;
  })
}

let safe = 0;
input.forEach((report) => {
  if (isOrdered(report) && inRange(report)) {
    safe++;
  };
});

console.log(safe);
