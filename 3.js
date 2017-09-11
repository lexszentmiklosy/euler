let factors = [];
let num = 600851475143;
let x = 2;

function isPrime(x) {
  for(let i = 2; i < x; i++) {
    if (x % i === 0) { return false; }
  }
  return true;
}

while(x <= num) {
  console.log(`x: ${x}, num: ${num}, factors: ${factors}`);
  if (num % x === 0) {
    factors.push(x);
    num = num / x;
    x = 2;
  } else {
    x++;
  }
}

// let primeFactors = factors.filter(isPrime);
//
// console.log(primeFactors);
console.log(factors);
