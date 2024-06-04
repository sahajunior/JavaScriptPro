/*
//  1. Introducing This
const person = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    return `${this.name} sings LA LA LA`;
  },
};

console.log(person.sing());

const pSing = person.sing; // Conan sings LA LA LA
console.log(pSing()); //  sings LA LA LA
*/

/*
//  2. The Mystery of The Keyword This
class Cat {
  constructor(name) {
    this.name = name;
  }

  dance(style = "Tango") {
    return `Meow. I am ${this.name}` + ` and I like to ${style}`;
  }
}

const fluffy = new Cat("Fluffy");
//  console.log(fluffy.dance()); // Meow. I am Fluffy and I like to Tango
//  console.log(fluffy.dance("Salsa")); // Meow. I am Fluffy and I like to Salsa

const fDance = fluffy.dance;
//console.log(fDance()); // TypeError: Cannot read properties of undefined (reading 'name')

const fDanceTwo = fluffy.dance();
console.log(fDanceTwo); // Meow. I am Fluffy and I like to Tango
*/

/*
//  3. Global Objects and This
//  When we call a function on nothin' we call it on the 'global object'. In browser JS, that's typically window (the browser window). In NodeJS, that's global (where some Node utilities are)
function greet() {
  return "Hi";
}

// console.log(greet());
// console.log(window.greet()); // Same result! For details, need to check on Chrome's Developer Console. To wrap up, we are calling them global objects greet. JS doesn't have a proper function!
//  We don't need to add window actually. Like for setTimeout or setInterval
*/

/*
//  4. The Left Of The Dot Rule
function whatIsThis() {
  console.log("The value of this is: ", this);
}

whatIsThis(); // This refers to the WINDOW object! because essentially it's window.whatIsThis();

const obj = {
  color: "Purple",
  whatIsThis: whatIsThis,
};

obj.whatIsThis(); // This refers to the 'obj' object! It refers to the left the of the side!

const person = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("This is: ", this);
    return `${this.name} sings LA LA LA`;
  },
};

console.log(person.sing()); //  This refers to the person object! It refers to the left the of the side!
const s = person.sing; // This refers to the WINDOW object! because essentially it's window.whatIsThis();
s();
// Outputs:  sings LA LA LA. Because if we type out window.name it returns ''. So, name = '' Thus the result!
*/

/*
//  5. This and Classes
class Cat {
  constructor(name) {
    this.name = name;
  }

  static getRandomCat() {
    console.log("This is: ", this); // Refers to the class Cat
  }

  dance(style = "Tango") {
    console.log("This is: ", this); // Refers to the instance of the class!
    return `Meow. I am ${this.name}` + ` and I like to ${style}`;
  }
}

const blue = new Cat("blue");
blue.dance(); // Refers to blue instance. This => blue
Cat.getRandomCat(); // This => Cat
const blueDance = blue.dance;
blueDance(); // TypeError: Cannot read properties of undefined (reading 'name')
//  We just called it in the global scope. So, the 'this' refers to the windows object! // undefined.name => Error, window.name => ''

// To wrap up!
blue.dance("Salsa");
//  1. Find the dance method on blue
//  2. Call the dance method on blue -- YAY!

const bDance = blue.dance;
bDance("Salsa");
//  1. Find the dance method on blue
//  2. Call the dance method on... undeifned -- HUH!

//  OOP and this
//  When you call a function on nothing,
//  but the function comes from inside a class,
//  the value of this will be undefined, not the window.

//  When you call a function on nothing,
//  that comes from an object or just a regular function that exist on its own
//  the value of this will be the window.

//  In either case, we'll see this referred to as 'losing the this context'
*/

/*
//  6. The Call Method
class Cat {
  constructor(name) {
    this.name = name;
  }

  static getRandomCat() {
    console.log("This is: ", this); // Refers to the class Cat
  }

  dance(style = "Tango") {
    console.log("This is: ", this); // Refers to the instance of the class!
    return `Meow. I am ${this.name}` + ` and I like to ${style}`;
  }
}

const blue = new Cat("Blue");
console.log(blue.dance());
const blueDance = blue.dance;
console.log(blueDance.call(blue));

const fluffy = new Cat("Fluffy");
console.log(blueDance.call(fluffy)); // This => Fluffy

console.log(blueDance.call(fluffy, "Salsa"));

const conan = {
  name: "Conan",
  city: "LA",
  des: function () {
    console.log("THIS is: ", this);
    return `${this.name} is from ${this.city}`;
  },
};

const lisa = {
  name: "Lisa",
  city: "SF",
};

const conanP = conan.des;
console.log(conanP.call(conan)); // Conan is from LA
console.log(conanP.call(lisa)); // Lisa is from SF => Lisa gets the function from Conan
*/

/*
//  7. The Apply Method
const ringo = {
  firstName: "Ringo",
  greet: function (greeting, toWhom) {
    console.log(`${this.firstName} says ${greeting} to ${toWhom}`);
  },
};

const george = {
  firstName: "George",
  lastName: "Cooper",
};

ringo.greet("Hello", "John"); // Ringo says Hello to John
ringo.greet.call(george, "Hey", "John"); // George says Hey to John
//ringo.greet.apply(george, "Hey"); // TypeError: CreateListFromArrayLike called on non-object
ringo.greet.apply(george, ["Hola!", "John"]); // Apply expects all the arguments in an array! => George says Hola! to John

const numbers = [1, 5, 2, 99, 3, 5];
console.log(Math.max(numbers)); //  NaN
console.log(Math.max(...numbers)); //  99
console.log(Math.max.apply(null, numbers)); // 99 => Take all of those elemets from numbers and pass them as separate arguments to Math.max! Giving null as object because I don't need any object to complete the logic!

function maximum() {
  console.log(arguments);
  return Math.max.apply(null, arguments);
}
console.log(maximum(1, 2, 3, 4, 99, 88, 23)); //  { '0': 1, '1': 2, '2': 3, '3': 4 } => Array like object

// Both call and apply expects the first arguments as 'this'
*/

/*
//  8. The Bind Method
const conan = {
  name: "Conan",
  city: "LA",
  des: function () {
    console.log(this);
    return `${this.name} is from ${this.city}`;
  },
};

const lisa = {
  name: "Lisa",
  city: "SF",
};

console.log(conan.des()); // This => Conan
conan.des.call(lisa); // Takes lisa's instance for once. Doesn't create a new function!

// Bind will make me a new function
const lisaDes = conan.des.bind(lisa);
console.log(lisaDes()); // It's always Lisa! Context is perba-bound to lisa
*/

/*
//  9. Binding Arguments
function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

const applyCASalesTax = applySalesTax.bind(null, 0.0725);
const applyMTSalesTax = applySalesTax.bind(null, 0);
//  The first argument is what we use to set the value of 'this' or the context, any other additional arguments will be bound as argumnets in the copy.

console.log(applyCASalesTax(100));
console.log(applyMTSalesTax(100));

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

const double = multiply.bind(null, 2);
console.log(double(3)); // 6

const triple = multiply.bind(null, 3);
console.log(triple(2)); // 6

const alwaysNine = multiply.bind(null, 3, 3);
console.log(alwaysNine()); // 9
console.log(alwaysNine(0)); //   9
console.log(alwaysNine(-9)); // 9
console.log(alwaysNine(23812647163)); // 9
*/

/*
//  10. Bind With Event Listeners
const conan = {
  name: "Conan",
  city: "LA",
  des: function () {
    console.log("This is: ", this);
    console.log(`${this.name} is from ${this.city}`);
  },
};

const btn = document.querySelector("#clickMe");

btn.addEventListener("click", conan.des); // this => btn => Button element
btn.addEventListener("click", conan.des.bind(conan)); // this => conan
btn.addEventListener("click", conan.des.call(conan)); // Immidiately calls the function just!
*/

/*
//  11. Bind With Timers
class Counter {
  constructor(startingNumber = 0, incrementAmount = 1) {
    this.startingNumber = startingNumber;
    this.incrementAmount = incrementAmount;
  }
  start() {
    // setInterval(function () {
    //   console.log("THIS is: ", this);
    //   console.log(this.startingNumber);
    //   this.startingNumber += this.incrementAmount;
    // }, 1000);
    // this => window!
    // setInterval(
    //   function () {
    //     console.log("THIS is: ", this);
    //     console.log(this.startingNumber);
    //     this.startingNumber += this.incrementAmount;
    //   }.bind(this),
    //   1000
    // );
    // this => the instance!
    setInterval(this.process.bind(this), 1000);
  }

  process() {
    console.log("THIS is: ", this);
    console.log(this.startingNumber);
    this.startingNumber += this.incrementAmount;
  }
}

const counter = new Counter(1, 1);
counter.start();
const counterTwo = new Counter(0, 50);
counterTwo.start();
*/

/*
//  12. Arrow Functions and This
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  superGreet() {
    console.log(`#1: I am ${this.firstName}`); // works

    setTimeout(function () {
      console.log("THIS is: ", this); // window
      console.log(`#2: I am ${this.firstName}`); // huh? => 'this' => window!
    }, 500);

    setTimeout(() => {
      console.log("THIS is: ", this); // Not a new value for arrow functions. this => Cat's instance
      console.log(`#3: I am ${this.firstName}`); // works!!
    }, 1000);
    //  We don't need to bind occasionally in arrow fucntions!
  }
}

let blue = new Cat("Blue");
blue.superGreet();
*/

/*
//  13. This Takeaways

// 1. We have to make sure what the 'this' is, for every context!
// => 'this' is a reserved keyword whose value is determined only at the point of function execution.
// => If we don't call a function by ourselves (e.g, it's called by a callback!), you need to ensure JS knows the 'this' context should be.

// In browser, the global 'this' is windows object!

function greet() {
  console.log(`${this.username} says Hello!`);
}

const customer = {
  username: "Nightman",
  sayHi: greet,
};

greet(); // windows.username = udefined
customer.sayHi(); // Nightman says Hello! this => customer object!

class CounterGame {
  constructor(initial) {
    this.count = initial;
  }
}

const newCounterGame = new CounterGame(2); // count: 2  => usually this => instance

class CounterGame {
  constructor(initial, buttonElement) {
    this.count = initial;
    this.button = buttonElement;
    this.button.addEventListener("click", this.incrementCount); // this => btn
    this.button.addEventListener("click", this.incrementCount.bind(this)); // this => Instance of the CounterGame
    this.button.addEventListener("click", () => this.incrementCount()); // arrowFunction!! => BEST way to work with
  }

  incrementCount() {
    this.count += 1;
    console.log(this.count);
  }
}

const btn = document.querySelector("#clickMe");
const counter = new CounterGame(1, btn);
*/
