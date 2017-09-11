let sum = 0;
let a = 1;
let b = 2;
let temp;
while(a < 4000000) {
  if (a % 2 === 0) { sum += a }
  temp = a;
  a = b;
  b = temp  + a;
}

console.log(sum);
