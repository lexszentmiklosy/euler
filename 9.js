let a = 1;
let b = 2;

function isSquare(x) {
  if ( Number.isInteger(Math.sqrt(x))) {
    return true;
  }
}

while (b < 1000) {
  while (a < b) {
    sum = (a*a) + (b*b);
    if (isSquare(sum)) {
      let c = Math.sqrt(sum);
      let abc = a + b + c;
      if (abc === 1000) {
        console.log(`${a} + ${b} + ${c} = ${a+ b + c}`);
        let prodabc = a*b*c;
        console.log(prodabc);
      }
    }
    a++;
  }
  a = 1;
  b++;
}
