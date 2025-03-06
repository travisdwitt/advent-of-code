// Advent of Code 2024 Day 1: Historian Hysteria (Part 2)
import puzzle_input from './input';

let input = puzzle_input.puzzle_input;
let [listA, listB, results] = [[], [], []];

// split input into two lists
input.forEach((x, i) =>
  (i === 0 || !(i % 2) ? listA.push(x) : listB.push(x))
);

// count how many times valueA exists in listB
listA.forEach((x) =>
  results.push(listB.filter((y) => x === y).length * x)
);

// squish it all together
console.log(results.reduce((a, b) => a + b));
