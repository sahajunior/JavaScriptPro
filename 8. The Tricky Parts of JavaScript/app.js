/*
//  1. Working With Float Imprecision
console.log(0.1 + 0.2 === 0.3) // false
console.log(0.1 + 0.30000001 === 0.40000001) // false

function areFloatsEqual(a, b, epsilon = 1e-10) {
  return Math.abs(a - b) < epsilon
}

console.log(areFloatsEqual(0.3, 0.1 + 0.2)) // true
*/

/*
//  2. BigInt() and Really Large Numbers
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
const maxSafeInteger = Number.MAX_SAFE_INTEGER
console.log(maxSafeInteger) // 9007199254740991
console.log(maxSafeInteger + 1) // 9007199254740992
console.log(maxSafeInteger + 2) // 9007199254740992 [WHAAAT?]
console.log(maxSafeInteger + 3) // 9007199254740994
console.log(maxSafeInteger + 4) // 9007199254740996 [WHAAAT?]

const bigboyOne = BigInt('216367846197123802938197461378453184128612')
const bigboyTwo = 216367846197123802938197461378453184128612n

console.log(bigboyOne)
console.log(bigboyTwo)
console.log(typeof bigboyOne) // bigint
console.log(typeof bigboyTwo) // bigint

const BigMaxValue = BigInt(Number.MAX_VALUE) // 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368n
const BigMaxSafeInteger = BigInt(Number.MAX_SAFE_INTEGER) // 9007199254740991n

// console.log(BigMaxSafeInteger + 2) // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(BigMaxSafeInteger + 2n) // 9007199254740993n
// If we are dealing with BigInt we need to add 'n' at the end
// BigInt doesn't support floating numbers

// Certain operations don't work for BigInts
console.log(Math.sqrt(2n)) // TypeError: Cannot convert a BigInt value to a number
*/

/*
//  3. isNan() vs Number.isNaN()
// JavaScript's NaN value can be tricky. It often comes from:
// => Logical math errors, like 0 / 0
// => Imaginary numbers, like Math.sqrt (-1)
// => Conversion errors, like Number('Nope)

console.log(NaN === NaN) // false
console.log(0 / 0 === 0 / 0) // false
console.log(NaN == NaN) // false
console.log(0 / 0 == 0 / 0) // false

console.log(isNaN(0 / 0)) // true
console.log(isNaN(NaN / NaN)) // true

// All NaN values are considered unique, so NaN === NaN is false.
// If you need to check for NaN, there are two different ways:

// 1. isNaN (n) => This returns true if n is NaN or is a value that cannot be coerced into a number.
console.log(isNaN(0 / 1)) // false
console.log(isNaN([])) // false
console.log(isNaN('')) // false
console.log(isNaN('5')) // false
console.log(isNaN('AS')) // true
console.log(isNaN('AS5')) // true
console.log(isNaN('5AS5')) // true

// 2. Number. isNaN(n) => This returns true only if n is NaN - everything else returns false.
console.log(Number.isNaN(0 / 0)) // true
console.log(Number.isNaN('ASD')) // false
console.log(Number.isNaN(0)) // false
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(0)) // false
console.log(Number.isNaN(1)) // false
// It returns true only if the value is TRULY not a number.
*/

/*
//  4. Post and Pre Increment: ++x vs. x++
let x = 5
x++
console.log(x)
++x
console.log(x)

let y = x++
console.log(x, y) // x = 8, y =7

y = ++x // x = 8, y =7
console.log(x, y) // x = 9, y =9

// In post: The current value will be used in the current expression
// In pre: The new value will be used in the current expression

// In browser, we can see that
// If we write y++, it will show 9, & then is we call y, it will show it's latest value which is 10
// If we write ++y, it will show 10 immediately

class Counter {
  current = 1
  next() {
    return ++this.current
  }
}

const counter = new Counter()
counter.next()
console.log(counter.current) // 1(x++)  2(++x)

counter.next()
console.log(counter.current) // 2(x++)  3(++x)

counter.next()
console.log(counter.current) // 3(x++)  4(++x)

counter.next()
console.log(counter.current) // 4(x++)  5(++x)

counter.next()
console.log(counter.current) // 5(x++)  6(++x)
*/

/*
//  5. Automatic Semicolon Insertion
// At some point, JS browser, or node adds the semicolons. It's best to use the semicolons!
*/

/*
//  6. JavaScript Generator Functions
// Generator functions are functions that can pause their execution and then resume their execution.
function* evens(n) {
  while (true) {
    yield n;
    n += 2;
  }
}

console.log(evens(8)); // Gave me a generator
console.log(evens(8).next()); // { value: 8, done: false }

const evenGen = evens(10);
console.log(evenGen.next()); // { value: 8, done: false }
console.log(evenGen.next()); // { value: 10, done: false }
console.log(evenGen.next()); // { value: 12, done: false }
console.log(evenGen.next()); // { value: 14, done: false }
console.log(evenGen.next()); // { value: 16, done: false }
console.log(evenGen.next()); // { value: 18, done: false }

// Gimme an even, everytime I call you. I don't need all of em at once!

function* myDogs() {
  yield 'A';
  yield 'B';
  yield 'C';
  yield 'D';
}

const catGenerator = myDogs();
console.log(catGenerator.next()); // A done: false
console.log(catGenerator.next()); // B done: false
console.log(catGenerator.next()); // C done: false
console.log(catGenerator.next()); // D done: false
console.log(catGenerator.next()); // undefined, done: true

function* fibonacci() {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacci();
console.log(fibGen.next()); // 0
console.log(fibGen.next()); // 1
console.log(fibGen.next()); // 1
console.log(fibGen.next()); // 2
*/

/*
//  7. When Are Generators Useful?
const allImages = Array.from(
  { length: 1000 },
  (_, i) => `https://placeimg.com/640/480/any?image${i}`
);
// console.log(allImages);

function* imageGenerator(images, batchSize = 10) {
  let currIndex = 0;
  while (currIndex < images.length) {
    yield images.slice(currIndex, currIndex + batchSize);
    currIndex += batchSize;
  }
}

const imageGen = imageGenerator(allImages);
console.log(imageGen.next().value); // First 10
console.log(imageGen.next().value); // Second 10
console.log(imageGen.next().value); // Third 10
console.log(imageGen.next().value); // Fourth 10
*/

/*
//  8. The Incredibly Versatile Array.from() Method
// console.log(Array.from('Hello'));

// const set = new Set([1, 2, 3, 4]);
// console.log(set);

// console.log(Array.from(set));

const buttons = document.querySelectorAll('button');
console.log(buttons); // Gives us a NodeList
const buttonsArray = Array.from(buttons);
console.log(buttonsArray); // Gives us an Array

// We can use map as the second argument
console.log(Array.from('ABCD', (x) => x.toUpperCase())); // (4) ['A', 'B', 'C', 'D']
const nums = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(Array.from(nums, (n) => n + 1)); // [2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.from({ length: 10 })); // Give us a array of 10 elements with values of undefined
console.log(Array.from({ length: 10 }, (el) => true)); // Give us a array of 10 elements with values of true
console.log(Array.from({ length: 10 }, (el) => 'lol')); // Give us a array of 10 elements with values of lol
console.log(Array.from({ length: 100 }, (el, index) => index)); // Give us a array 0 to 99
console.log(Array.from({ length: 100 }, (el, index) => index + 1)); // Give us a array 1 to 100
*/
