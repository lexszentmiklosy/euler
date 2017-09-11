function isPrime(x) {
  for(let i = 2; i < x; i++) {
    if (x % i === 0) { return false; }
  }
  return true;
}

primes = [];
x = 2;

while (primes.length < 10001) {
  if (isPrime(x)) {
    primes.push(x);
  }
  x++;
}

console.log(primes[primes.length-1]);
