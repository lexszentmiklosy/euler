

function getFactors(x) {
  // for 28 1*28 is a factor, 2*14, 4*8. Each success will add 2 factors
  let factors = 0;
  for (let i = 1; i*i <= x; i++) {
    if (x % i === 0) {
      factors += 2;
    }
  }
  return factors;
}

let triangleFactors = [];
let triangle = 0;
let x = 1;
while (triangleFactors <= 500) {
  triangle = triangle + x;
  x++;
  triangleFactors = getFactors(triangle);
}

console.log(triangle);
