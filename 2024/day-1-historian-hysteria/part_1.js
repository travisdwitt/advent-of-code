// Advent of Code 2024 Day 1: Historian Hysteria (Part 1)
import puzzle_input from './input';

let input = puzzle_input.puzzle_input;
let [listA, listB, results] = [[], [], []];
input.forEach((x, i) =>
  (i === 0 || !(i % 2) ? listA.push(x) : listB.push(x))
);

listA.forEach((x) =>
  results.push(listB.filter((y) => x === y).length * x)
);

console.log(results.reduce((a, b) => a + b));
