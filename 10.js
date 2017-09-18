function isPrime(x) {
  for(let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) { return false; }
  }
  return true;
}

let primes = [];
for(let i = 2; i <= 2000000; i++) {
  if (isPrime(i)) { primes.push(i); }
}

console.log(primes);
sum = primes.reduce((a, b) => a+b, 0);
console.log(sum);
git 
