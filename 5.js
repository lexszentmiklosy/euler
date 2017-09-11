let divisible = false;
let x = 2;
let max = 20;
while (divisible === false) {
  for ( let i = 2; i <= max; i++) {
    // console.log(`x: ${x}, i: ${i}`);
    if (x % i === 0) {
      // console.log(`${x} is divisible by ${i}`);
      if (i === max) {
        divisible = true;
      }
    } else {
      // console.log(`${x} NOT DIVISIBLE BY ${i}. MOVE ON`);
      x++;
      break;
    }
  }
}

console.log(x);
