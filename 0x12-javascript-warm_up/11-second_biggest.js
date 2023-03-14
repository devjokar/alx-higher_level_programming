#!/usr/bin/node

let biggest = 0;
let i;
const arrayNumbers = [];

for (i = 2; i < process.argv.length; i++) {
  if (Number.isNaN(parseInt(process.argv[i])) === false) {
    arrayNumbers[i - 2] = parseInt(process.argv[i]);
  }
}

biggest = arrayNumbers.sort((a, b) => a - b)[arrayNumbers.length - 2];
console.log(biggest);
