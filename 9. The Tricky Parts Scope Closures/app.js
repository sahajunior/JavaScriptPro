/*
//  1. Recaping Var Scope
var color = 'black'; // global variable
function blah() {
  console.log(color);
  var animal = 'Flamboyant Cuttlefish';
  console.log(animal);
}

if (true) {
  console.log(color);
  var food = 'Chicken Parmesan';
}

console.log(food);
// console.log(animal); // But this isn't available

//  Variables created with var is not scoped! It's globally available. If it's in a codeblock than we can access it but if inside a function, we cannot access it!

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log('AFTER THE LOOP IS OVER. i = ', i);
console.log(window.i);
*/

/*
//  2. Recaping Let Const Scope
var color = 'green';
console.log(window.color); // green

let colour = 'red';
console.log(window.colour); // undefined

const age = 9;
// console.log(age++); //  TypeError: Assignment to constant variable.

function blah() {
  let sport = 'Football';
  console.log(sport);
}
// console.log(sport); // Uncaught ReferenceError: sport is not defined

if (true) {
  const animal = 'Cat';
  console.log('Inside the conditional: ', animal);
}

// console.log('After the conditional: ', animal); // Uncaught ReferenceError: animal is not defined

for (var i = 0; i < 2; i++) {
  console.log('Inside the loop: ', i);
}
console.log('After The Loop: ', i);

for (let j = 0; j < 2; j++) {
  console.log('Inside the loop: ', j);
}
console.log('After The Loop: ', j); // Uncaught ReferenceError: animal is not defined
// Variables declared with let and const aren't added to the windows object!
*/

/*
//  3. The Scope Chain
//  1. In the local scope
//  2. Any outer functions
//  3. Global Scope

// let age = 10;
// function outer() {
//   console.log(age); // First in the scope, then globally
// }

// let age = 10;

// function outer() {
//   let age = 'Ageless';
//   console.log(age); // Ageless => First in the scope
// }

// let age = 10;

// function outer() {
//   let age = 'Ageless';
//   if (true) {
//     const age = 99;
//     console.log(age); // 99 => First in the scope
//   }
// }

// let age = 10;

// function outer() {
//   let age = 'Ageless';
//   function inner() {
//     let age = 'Eternal';
//     age = [];
//     console.log(age); // Eternal
//   }
//   inner();
//   console.log(age); // Ageless
// }

let age = 10;

function outer() {
  let age = 'Ageless';
  function inner() {
    age = [];
    console.log(age); // Eternal
    function superInner() {
      console.log(age);
    }
    superInner();
  }
  inner();
  console.log(age); // []
}

outer();
*/

/*
//  4. Static Scope

// JS is lexical & static
let animal = 'Barn Owl';

function printAnimal() {
  console.log(animal);
}

function alsoPrintAnimal() {
  let animal = 'Burrowing Owl';
  printAnimal();
}

alsoPrintAnimal(); // Barn Owl
*/

/*
//  5. Hoisting
// Hoisting is the behvior of JS, of moving our variable declarations to the top of their enclosing scope.
console.log(food); // undefined
var food = 'Pizza';

// This is how it works behind the scene
var food;
console.log(food); // undefined
food = 'Pizza';
console.log(food); // Pizza

function blah() {
  console.log(color); // Uncaught ReferenceError: color is not defined
}

blah();

function blah() {
  console.log(color); // Undefined
  var color = 'Black';

  // This is how it works behind the scene
  var color;
  console.log(color); // undefined
  color = 'Black';
  console.log(color); // Black
}

blah();

function blah() {
  // console.log(color);
  // let color = 'black'; // Uncaught Reference Error: Cannot access 'color' before initialization
}

blah();

// What it actually does!
function blah() {
  // let color = NO VALUE AT ALL;
  // TEMPORAL DEAD ZONE STARTS
  console.log(color); // Uncaught Reference Error: Cannot access 'color' before initialization
  color = 'black'; // TEMPORAL DEAD ZONE ENDS
}

blah();

function blah() {
  if (false) {
    var message = 'Hello';
  }
  console.log(message); // undefined, might be unexpected if unaware of hoisting
}

function blah() {
  if (false) {
    let message = 'Hello';
  }
  console.log(message); // ReferenceError: message is not defined
}

blah();
*/

/*
//  6. IIFEs
// IIFE => Immediately Invoked Function Expression
(function () {
  let secret = '18119abkgkGGduadg';
  console.log('Hello from an IIFE');
  console.log('This is the secret code: ', secret);
})();
// THIS CODE RUNS IMMIDIATELY! WITHOUT CALLING IT!

// Pros! => Security. I have declared a secret code called secret
// console.log(secret); // ReferenceError: secret is not defined
// But I no longer have access to this! It only run once!

// Pros! => Helps us avoid global scope pollution

(function () {
  var origin = 'Specific Part of Atlanta';
  console.log('Hello from an IIFE');
  console.log('Origin is: ', origin);
})();

console.log(origin); // http://127.0.0.1:5500
console.log(window.origin); // http://127.0.0.1:5500
// The origin remain unchanged! Browsers default!
*/

/*
//  7. Closures: The Basics
//  Closures: The ability for inner functions to remember variables defined in outer functions, long after the outer function has returned
function outerFunction() {
  let outerVariable = 'I am from outer';
  function innerFunction() {
    console.log('I am the Inner Function');
    console.log('outerVariable is: ', outerVariable);
  }
  return innerFunction;
}

const myClosure = outerFunction();
myClosure();

// When I called myClosure(), it started going to outerFunction()
// Then it returned me the innerFunction()
// innerFunction() has the access to the outerFunction(), so it can use the value of outerVariable!

function idGenerator() {
  let count = 1;
  return function generate() {
    return count++;
  };
}

const nextId = idGenerator();

console.log('Next ID', nextId());
console.log('Next ID', nextId());
console.log('Next ID', nextId());
console.log('Next ID', nextId());
console.log('Next ID', nextId());

// Easy way to do this!
let count = 1;

const nextIdEasy = () => count++;

console.log(nextIdEasy());
console.log(nextIdEasy());
console.log(nextIdEasy());
console.log(nextIdEasy());
console.log(nextIdEasy());

//  But here I am polluting the global variable, on the other hand, the count variable was under that function which wasn't global!
*/

/*
//  8. Closures: Another Example
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter);
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.getCount());

// Closures gives us benefit to hide some values. Means, I can't access them directly but I can access them via some methods

const counterx = (function () {
  let count = 0;
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    getCount: function () {
      return count;
    },
  };
})();
// This is a IIFE Closure
console.log(counterx.increment());
console.log(counterx.increment());
console.log(counterx.increment());
console.log(counterx.increment());
console.log(counterx.increment());
console.log(counterx.decrement());
console.log(counterx.decrement());
console.log(counterx.decrement());
console.log(counterx.getCount());
*/

/*
//  9. Closures: Factory Functions
function createExponentFunction(exponent) {
  return function (value) {
    return value ** exponent;
  };
}

const square = createExponentFunction(2); // This one takes the argument for the outer function which is exponent
console.log(square(2)); // This one takes the argument for the inner function which is value
console.log(square(3));
console.log(square(4));

// createExponentFunction(2);
// returns
// function (value) {
//   return value ** 2;
// }
// The outer function returns the inner function!

const cube = createExponentFunction(3);
console.log(cube(2));
console.log(cube(3));
console.log(cube(4));

function uniqueIdGenerator(prefix) {
  let id = 0;
  return function () {
    id += 1;
    return `${prefix}${id}`;
  };
}

const student = uniqueIdGenerator('STU_');
console.log(student());
console.log(student());
console.log(student());

const teacher = uniqueIdGenerator('TEA_');
console.log(teacher());
console.log(teacher());
console.log(teacher());

function AIUBIdGenerator(year) {
  let id = 37000;
  return function (session) {
    year = year % 100;
    if (session == 'Spring') {
      session = 1;
    } else if (session == 'Summer') {
      session = 2;
    } else if (session == 'Fall') {
      session = 3;
    } else {
      console.error('NOT A VALID SESSION!');
    }
    return `${year}-${++id}-${session}`;
  };
}

const generator = AIUBIdGenerator(2018);
console.log(generator('Spring'));
console.log(generator('Summer'));
console.log(generator('Fall'));
*/

/*
//  10. Closures: Event Listeners
// document.querySelector('#myBtn').addEventListener(
//   'click',
//   (function () {
//     let count = 0;
//     return function () {
//       count++;
//       console.log(`You Clicked Me ${count} times`);
//     };
//   })()
// );
function createCounterButton(id) {
  const btn = document.getElementById(id);
  let count = 0;
  btn.addEventListener('click', function () {
    count++;
    btn.innerText = `Clicked ${count} times`;
  });
}

createCounterButton('myBtn1');
createCounterButton('myBtn2');
createCounterButton('myBtn3');
*/

/*
//  11. Closures: Loops

// for (var i = 1; i < 6; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000 * j);
//   })(i);
// }

// i is global, but j is scoped in the IIFE! If we change the value of i outside the scope & run the function again, it will show us that value 5 times

for (let i = 1; i < 6; i++) {
  setTimeout(() => {
    if (i === 1) {
      console.log(`${i} second`);
    } else {
      console.log(`${i} seconds`);
    }
  }, 1000 * i);
}
*/
