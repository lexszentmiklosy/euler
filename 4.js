function isPalindrome(x) {
  var stringified = "" + x;
  var reverse = stringified.split('').reverse().join('');
  return stringified === reverse;
}


let largest = 0;
let sum;
for (let x = 100; x <= 999; x++) {
  for (let y = 100; y <= 999; y++) {
    sum = x * y;
    if (isPalindrome(sum)) {
      if (sum > largest) {
        largest = sum;
      }
    }
  }
}

console.log(largest);
