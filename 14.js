largestchain = [];
chainstarter = 0;

for(let n = 1; n < 1000000; n++) {
  x = n;
  chain = 1;
  while( x !== 1) {
    if (x % 2 === 0) {
      x = x / 2;
    } else {
      x = (3 * x) + 1
    }
    chain++;
  }
  // console.log(chain);
  if (chain > largestchain) {
    chainstarter = n;
    largestchain = chain;
  }
  n++;
}

console.log(chainstarter);
console.log(largestchain);
