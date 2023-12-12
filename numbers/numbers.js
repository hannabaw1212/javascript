let x = 3.14;
let y = 3;

console.log(x+y) // x + y

let x1 = 123e5; // 12300000
let y1 = 123e-5 // 0.00123
console.log(x1);
console.log(y1);


// floating points isn't always accurate
let x2 = 0.2 + 0.1;
console.log(x2);

// we can solve this by doing this
let x3 = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x3);

// adding string + integer
let x4 =  10;
let y4 = "20";
let z4 = x4 + y4;
console.log(z4)


// javascript convert string to numeric if all strings
let x5 = "100";
let y5 = "10";
let z5 = x5 + y5; // this specially does not work
console.log(z5);

let x6 = "100";
let y6 = "10";
let z6 = x5 - y5; 
console.log(z6);

let x7 = "100"
let y7 = "10"
z7 = x7 * y7
console.log(z7)

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let x8 = 100 / "apple"
console.log(x8)

let x9 = 100 / "10"
console.log(x9) // this will work

console.log(isNaN(x8)) // this will check if x8 is not a number

let z9 = NaN + 5 // this will return NaN
console.log(z9)

// Infinity
let myNumber  = 2;
while (myNumber != Infinity){
    myNumber *= myNumber;
}
console.log(myNumber)


// devide by zero will return infinity
let x10 = 2 / 0;
let x11 = -2 / 0;
console.log(x10)
console.log(x11)