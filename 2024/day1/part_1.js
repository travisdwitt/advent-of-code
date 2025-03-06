// Advent of Code 2024 Day 1: Historian Hysteria (Part 1)
import puzzle_input from './input';

let input = puzzle_input.puzzle_input;
let [listA, listB, results] = [[], [], []];

// split input into two lists
input.forEach((x, i) =>
  (i === 0 || !(i % 2) ? listA.push(x) : listB.push(x))
);

// sort the lists
listA = listA.sort((a, b) => a - b);
listB = listB.sort((a, b) => a - b);

// compare each value from low to high
listA.forEach((x, i) =>
  results.push(Math.abs(x - listB[i]))
);

// squish it all together
console.log(results.reduce((a, b) => a + b));
