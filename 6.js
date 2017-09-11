let max = 100;
let sumOfTheSquares = 0;
let squareOfTheSums = 0;


for (let i = 1; i <= max; i++) {
  sumOfTheSquares = sumOfTheSquares + (i * i);
}

for (let i = 1; i <= max; i++) {
  squareOfTheSums += i;
}
squareOfTheSums = squareOfTheSums * squareOfTheSums;

let difference = squareOfTheSums - sumOfTheSquares;



console.log(sumOfTheSquares);
console.log(squareOfTheSums);
console.log(difference);
