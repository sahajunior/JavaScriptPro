/*
// 1.  Introducing Functional Programming
// FP is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.
// FP is often declarative rather than imperative, and application state flows through pure functions.

// Essential concepts
// higher order functions, first class functions
// pure functions
// immutability closure
// partial application / currying
// function composition

// What FP avoids
// looping
// mutation and shared state
// variable declaration

// Imperative Programming
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

// Functional Programming
console.log([1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 0));

// Imperative Approach
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evens = [];
for (let num of nums) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

console.log(evens);

// Functional Approach
console.log(nums.filter((n) => n % 2 === 0));

// Imperative Approach
let numbers = [1, 2, 3, 4, 5];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

// Functional Approach
console.log(Math.max(...numbers));
*/

/*
// 2.  First Class Functions

// Independent Function
function greetAsIndependent(name) {
  console.log(`Hello There, ${name}.`);
}
greetAsIndependent('Independent Function');

// Function as a Variable
const functionAsVariable = function () {
  console.log(`I am a Variable function.`);
};
functionAsVariable();

// Array of functions
const functionAsAnArray = [
  function threat(name) {
    console.log(`I will kill you, ${name}.`);
  },
  function adore(name) {
    console.log(`I adore you, ${name}.`);
  },
];
functionAsAnArray[0]('Jack');
functionAsAnArray[1]('Jill');

// Making independent functions and calling them with another function.
function jealous(name) {
  console.log(`You have no life, ${name}.`);
}

function envy(name) {
  console.log(`I'll make you life a living hell, ${name}.`);
}

function callWithJames(funcTion) {
  funcTion('James');
}
callWithJames(jealous);

function callWithJavi(funcTion) {
  funcTion('Javi');
}
callWithJames(envy);

// Passing function as a parameter.
callWithJavi((color) => {
  console.log(`My favorite player is: ${color}`);
});
*/

/*
// 3.  Writing Pure Functions

// Pure functions
// • Referential transparency
//    => The function always gives the same return value for the same arguments
//    => The function cannot depend on any mutable state
// • Side-effect free:
//    => The function cannot cause any side effects.
//    => Side effects may include I/O (eg, writing to the console or a log file), modifying a mutable object, reassigning a variable, etc.

//  Impure Function
let value = 2;
function squareAndUpdateValue(num) {
  value = num * num;
  return value;
}
// This is impure because we've modified the value of 'value'
console.log(squareAndUpdateValue(3));
console.log(value);

//  Pure Function
function square(num) {
  return num * num;
}
// This is pure because it doesn't change any values.!
console.log(square(3));

//  Impure Function
const colors = ['red', 'green'];

function addToArray(arr, value) {
  return arr.push(value);
}

addToArray(colors, 'blue');
console.log(colors);

//  Pure Functions
function pureAddToArray(arr, value) {
  return [...arr, value];
}

console.log(pureAddToArray(colors, 'seagreen')); // returns a new array
console.log(colors); // colors contains the same 2 item
*/

/*
// 4.  Returning Functions
// Higher Order Functions => A function that receives another function as an argument, returns a function, or does both!
function doTwice(func) {
  func();
  func();
}

doTwice(function () {
  console.log('Hello There');
});

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
console.log(multiplyBy(3));
// function (number) {
//   return number * 3;
// }

const triple = multiplyBy(3);
const double = multiplyBy(2);
const multiplyBy10 = multiplyBy(10);

console.log(double(512));
console.log(triple(3));
console.log(multiplyBy10(10));
*/

/*
// 5.  Immutability
const nums = [1, 2, 3, 4];
console.log(nums);
nums.push(5);
console.log(nums);
nums.pop();
console.log(nums);

const person = {
  name: 'Teddy',
  age: 2,
};

person.name = 'Billy';
console.log(person.name);
// Although variables created with consts are immutable but arrays and objects aren't

Object.freeze(person); // One way to make object immutable
person.name = 'Rodrigo';
person.age = 3;
person.color = 'Red';
console.log(person); // Not changed

function push(arr, val) {
  return [...arr, val];
}
console.log(push(nums, 5));

function removeLastItem(arr) {
  return arr.slice(0, -1);
}
console.log(removeLastItem(nums));

//  {...person, legs:4}
*/

/*
// 6.  Recursion

// Recursion: It is a programming technique where a function calls itself in order to solve some sort of problem.
// This allows functions to be repeated several times without users having to actually write a loop.

// Computing Factorial

// Imperative Approach
function factorial(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// Recursive Approach
function factorialRecursion(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorialRecursion(5));

// How it works behind the scene!
// factorialRecursion(5)
//   return 5 * factorial(4)
//     return 4 * factorial(3)
//       return 3 * factorial(2)
//         return 2 * factorial(1)
//         return 2 * 1
//       return 3 * 2
//     return 4 * 6
//   return 5 * 24 // 120
*/

/*
// 7.  Partial Application With Bind
// Partial Application => The process of executing a function with some or all of its arguments. The partially applied function then gets returned for later use.
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!!!`);
}

// greet('Hey there', 'Timothy');
const aussieGreet = greet.bind(null, "G'day");
aussieGreet('Timothy');

const spitefulGreet = greet.bind(null, 'I hate you');
spitefulGreet('Gray');
*/

/*
// 8.  Writing a Partial Function
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);
console.log(double(4));
console.log(triple(3));

function partial(func, ...fixedArgs) {
  return function (...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs);
  };
}

const doublePartial = partial(multiply, 2);
const triplePartial = partial(multiply, 3);

function fetchData(url, apiKey, params) {
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${url}?${queryString}`;

  console.log(`Sending request to ${fullUrl}`);
  console.log(`With API key of ${apiKey}`);
}

const myApiKey = 'my-secret-api-key';
const myApiUrl = 'https://api.mywebsite.com/data';

const googleApiKey = 'google-secret-api-key';
const googleApiUrl = 'https://api.google.com/data';

const fetchMyAPI = partial(fetchData, myApiUrl, myApiKey);
const fetchGooglesAPI = partial(fetchData, googleApiUrl, googleApiKey);

fetchMyAPI({ id: 1, sort: 'desc' });
fetchGooglesAPI({ searchTerm: 'chicken' });
*/

/*
// 9.  Composition Basics
// Composition => Fucntion composition is a mechanism of combining multiple functions to build a more complicated one. The result of each function is passed to the next one.
// In math, this can be expressed as f(g(h(x)))

const add = (a, b) => a + b;
const square = (a) => a * a;
console.log(add(10, square(9))); // 91
console.log(square(add(10, 20))); // 300
console.log(add(square(2), square(3))); // 13

const addAndSquare = (a, b) => square(add(a, b));
console.log(addAndSquare(5, 5)); // 100

const lowerCaseString = (str) => str.toLowerCase();
const splitWords = (str) => str.split(' ');
const joinWithDash = (arr) => arr.join('-');

console.log(splitWords('Hello World'));

console.log(joinWithDash(splitWords(lowerCaseString('My Favorite Function'))));

//  lowerCaseString('My Favorite Function') => my favorite function
//  splitWords('my favorite function') => ['my', 'favorite', 'function']
//  joinWithDash(['my', 'favorite', 'function']) => my-favorite-function
*/

/*
// 10. A Simple Compose Function
function compose(fn1, fn2) {
  return function (val) {
    return fn1(fn2(val));
  };
}
// f(g(x))

function repeatTwice(str) {
  return str.repeat(2);
}
function upperCase(str) {
  return str.toUpperCase();
}

console.log(repeatTwice('He'));
console.log(upperCase('usa'));

const repeatAndUpperCase = compose(repeatTwice, upperCase);

console.log(repeatAndUpperCase('Shomoy'));

// function ('Shomoy') {
//     fn1(fn2('Shomoy'));
//   };
// fn2('Shomoy') => SHOMOY
// fn1(SHOMOY) => SHOMOYSHOMOY

const square = (a) => a * a;
const double = (a) => a * 2;

const squareAndDouble = compose(square, double);
console.log(squareAndDouble(2)); // 16
console.log(squareAndDouble(3)); // 36
*/

/*
// 11. Writing a Fancier Compose Function
function compose(...functions) {
  return function (data) {
    return functions.reduceRight((val, func) => func(val), data);
  };
}

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(' ');
}

function joinWithDash(array) {
  return array.join('-');
}

function replaceS(str) {
  return str.replaceAll('s', '$');
}

const slugify = compose(joinWithDash, splitWords, lowerCaseString);
console.log(slugify('Fancy product 12'));

//  function (data) {
//   return functions.reduceRight((val, func) => func(val), data);
// };

//  reduceRight will execute the functions array from right to left
//  const slugify = compose(joinWithDash, splitWords, lowerCaseString); => So, first lowerCaseString('Fancy product 12') => 'fancy product 12'
//  then, splitWords('fancy product 12') => (3) ['fancy','product', '12']
//  then, joinWithDash(['fancy','product', '12']) => 'fancy-product-12

const lowerAndReplaceS = compose(replaceS, lowerCaseString);
console.log(lowerAndReplaceS('Sorry for something'));
*/

/*
// 12. Currying Basics
//  Currying => A curried function can be called with any number of arguments — if you call it with fewer args than it takes, it returns a "smaller" partial, which you can then call with remaining arguments.
// f(a,b,c,) => f(a)(b)(c)
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3));

function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(addCurry(1)(2)(3));
console.log(addCurry(6)(3)(1));
*/

/*
// 13. More Advanced Currying
function add3(x, y, z) {
  return x + y + z;
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curriedAdd = curry(add3);

console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(3));
*/

/*
// 14. Dice Game Intro
class DiceGame {
  constructor(rollBtnId, resultDisplayId) {
    this.rollBtn = document.getElementById(rollBtnId);
    this.resultDisplay = document.getElementById(resultDisplayId);

    this.rollBtn.addEventListener('click', this.rollDice);
  }

  // Generate a random number between 1 and 6 (inclusive)
  getRandomRoll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Check if the user won
  checkWin(roll) {
    return roll === 6;
  }

  // Bind the rollDice method to the click event
  rollDice = () => {
    const roll = this.getRandomRoll();

    if (this.checkWin(roll)) {
      this.resultDisplay.innerText = `You rolled a ${roll}! You win!`;
    } else {
      this.resultDisplay.innerText = `You rolled a ${roll}. Try again!`;
    }
  };
}

// Start the game by creating a new instance
new DiceGame('rollBtn', 'result');
*/

/*
// 15. Dice Game Simple FP
const getRandomRoll = () => Math.floor(Math.random() * 6) + 1;
const checkWin = (roll) => roll === 6;

const displayResult = (element, message) => {
  element.innerText = message;
};

const rollDiceAndDisplayResult = (resultDisplay) => () => {
  const roll = getRandomRoll();
  const message = checkWin(roll)
    ? `You rolled a ${roll}. You win!`
    : `You rolled a ${roll}. Try again!`;

  displayResult(resultDisplay, message);
};

const createDiceGame = (rollBtnId, resultDisplayId) => {
  const rollBtn = document.getElementById(rollBtnId);
  const resultDisplay = document.getElementById(resultDisplayId);

  rollBtn.addEventListener('click', rollDiceAndDisplayResult(resultDisplay));
};

createDiceGame('rollBtn', 'result');
*/

/*
// 16. Dice Game Going Overboard with FP
const partial =
  (fn, ...fixedArgs) =>
  (...args) =>
    fn(...fixedArgs, ...args);

const compose = (...fns) =>
  fns.reduceRight(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );

const getRandomRoll = () => Math.floor(Math.random() * 6) + 1;
const checkWin = (roll) => roll === 6;

const displayResult = (element, message) => {
  element.innerText = message;
};

const createMessage = (roll) => {
  return checkWin(roll)
    ? `You rolled a ${roll}. You win!`
    : `You rolled a ${roll}. Try again!`;
};

const createDiceGame = (rollBtnId, resultDisplayId) => {
  const showResult = partial(
    displayResult,
    document.getElementById(resultDisplayId)
  );

  const playGame = compose(getRandomRoll, createMessage, showResult);

  document.getElementById(rollBtnId).addEventListener('click', playGame);
};

createDiceGame('rollBtn', 'result');
*/

/**/
// 17. Functional Programming Wrapup
/*
Essential concepts
• higher order functions, first class functions
• pure functions
• immutability
• closure


What FP avoids
• looping
• mutation and shared state
• variable declaration


Pure functions
• Referential transparency
    => The function always gives the same return value for the same arguments
    => The function cannot depend on any mutable state
• Side-effect free:
    => The function cannot cause any side effects.
    => Side effects may include I/O (eg, writing to the console or a log file), modifying a mutable object, reassigning a variable, etc.


Benefits of pure functions
• Can be easier to reason about/debug because they don't depend on any state.
• Return value can be cached or memoized to avoid recomputation later.
• Can be easier to test as there are no dependencies (such as logging, Ajax, database, etc.) that need to be mocked.

Javascript FP Libraries
• ramda
• lodash/fp


OOP vs FP
• OOP is often easier to reason about and read.
• FP has a much steeper learning curve, but can allow for functions to be simplified and easily composed.
• Different languages have different takes
    => Some are primarily functional (eg, Haskell, Schema, Clojure)
    => Some are primarily object-oriented (eg, Java)
    => Most are "multi-paradigm" and allow both styles and even mix them (eg, JavaScript, Python, C#, Swift, Ruby)

Resources
• Professor Frisby's mostly adequate guide to functional programming => https://mostly-adequate.gitbook.io/mostly-adequate-guide
• What is functional programming? => https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0
*/
