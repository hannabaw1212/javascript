// JavaScript integers are only accurate up to 15 digits
let x = 999999999999999; // x will be 999999999999999
let y = 9999999999999999; // y will be 10000000000000000
console.log(x);
console.log(y);
// The range of JavaScript integers is 2^53 to -2^53 (2^53 = 9007199254740992)

// to crete a big integer we can use BigInt or add n at the end of the number
let y1 = 999999999999999999n;
console.log(y1);

let y2 = BigInt(999999999999999999);
console.log(y2);

// bigint operations can only be done with bigint
let x1 = 1241241241124121n;
let y3 = 131241241445303142n;
console.log(x1 * y3);
// console.log(10 + y3); // this will not work

// new number methods
// Number.isInteger() returns true if the argument is an integer
// Number.isSafeInteger() returns true if the argument is a safe integer. safe integer is an integer that can be exactly represented as an IEEE-754 double precision number
safe_integer = Number.isSafeInteger(10);
console.log(safe_integer); // true
Number.isSafeInteger(12345678901234567890); // false
