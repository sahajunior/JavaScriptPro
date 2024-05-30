/*
//  2. The New Keyword
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return "WOOF!";
  }
}

Dog("Elton", "Aussie"); // Doesn't work
new Dog("Elton", "Aussie"); // Does work

// The new keyword does four things:
// 1. Creates an empty object
// 2. Sets the keyword this to be that object
// 3. Returns the object - return this
// 4. Creates a link to the object's prototype

// THE OLD SCHOOL CONSTRUCTOR FUNCTION!

function Dog(name, breed) {
  console.log("THIS is: ", this);
  this.name = name;
  this.breed = breed;
}

Dog("Wyatt", "Golden Retriever"); // In this case, the this refers to the windows object, because the function is in the global scope! So it won't work!
const wyatt = new Dog("Wyatt", "Golden Retriever"); // In this case, this => returns a new object for Wyatt the Golden Retriever
const elton = new Dog("Elton", "Australian Shepard"); // In this case, this => returns a new object for Elton the Australian Shepard

function User(username, email) {
  this.username = username;
  this.email = email;
  this.isAdmin = false;
}

const chloe = new User("John", "john@gmail.com"); // // In this case, this => returns a new object for John who has an email address and isn't an admin
console.log(chloe);
*/

/*
// 3. Prototypes Part 1
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return `${this.name} says Woof!`;
  }
  sleep() {
    return `${this.name} is sleeping`;
  }
}

const elton = new Dog("Elton", "Australian Shepard");
const wyatt = new Dog("Wyatt", "Golder Retriever");

console.log(elton.bark === wyatt.bark); // true
// bark and sleep are not seen as prototypes in the browser console. But if I try to access them, those works! They hides under: [[Prototype]]: Object
// They come from the same class, thus they share the same references of the methods

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;

  this.bark = function () {
    return `${this.name} says Woof!`;
  };

  this.sleep = function () {
    return `${this.name} is sleeping`;
  };
}
const elton = new Dog("Elton", "Australian Shepard");
const wyatt = new Dog("Wyatt", "Golder Retriever");
// // bark and sleep are seen as prototypes in the browser console. Has it's own copy bark and sleep! Meaning they have their each functions

console.log(elton.bark === wyatt.bark); // false
*/

/*
//  4. Prototypes Part 2
const myObject = {
  color: "purple",
  score: 99,
  greet() {
    console.log("Hiiii");
  },
};

// Prototypes are the basic mechanism that gives JS objects the ability to inherit features and functionality from each other.
// Every JS objects has a special built in property, which is called its prototype
// Protype is itself an object which can have its own property, making what we call the prototype chain!
myObject.__proto__; // We can see them in the browsers console. It points to another object which has those special built in properties!
// Same goes fore the arrays.

const num = [1, 2, 3];
num.__proto__; // We can see them in the browsers console. It points to another object which has those special built in properties!

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return `${this.name} says Woof!`;
  }
  sleep() {
    return `${this.name} is sleeping`;
  }
}

const elton = new Dog("Elton", "Australian Shepard");
const wyatt = new Dog("Wyatt", "Golder Retriever");
elton.__proto__; // We can see them in the browsers console. It points to another object which has those special built in properties!
wyatt.__proto__; // We can see them in the browsers console. It points to another object which has those special built in properties!

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;

  this.bark = function () {
    return `${this.name} says Woof!`;
  };

  this.sleep = function () {
    return `${this.name} is sleeping`;
  };
}
const elton = new Dog("Elton", "Australian Shepard");
const wyatt = new Dog("Wyatt", "Golder Retriever");
*/

/*
//  5. Prototypes Part 3
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return `${this.name} says Woof!`;
};

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping`;
};

const elton = new Dog("Elton", "Australian Shepard");
console.log(elton.bark());
console.log(elton.sleep());

const wyatt = new Dog("Wyatt", "Golder Retriever");
console.log(wyatt.bark());
console.log(wyatt.sleep());

console.log(elton.bark === wyatt.bark); // true. Now it's coming from the same reference! Thus, they are equal.

// 4. Creates a link to the object's prototype =>> This is it!

elton.__proto__; // We can see them in the browsers console. It points to another object which has those special built in properties along with the bark & sleep!
wyatt.__proto__; // We can see them in the browsers console. It points to another object which has those special built in properties along with the bark & sleep!
*/

/*
//  5. The Prototype Chain
const grandPa = {
  greet() {
    return "Hi There";
  },
};

const parent = {
  color: "puple",
  sing() {
    return "LA LA LA";
  },
  __proto__: grandPa,
};

const child = {
  num: 2,
  __proto__: parent, // We have to write specifically to connect it to parent object!   __proto__
};

console.log(child);

console.log(child.color); // purple

console.log(child.greet()); // Hi There => First check in child, then check in __proto__, which is parent, then __proto__ for parent which refers to grandPa. Then call it

console.log(child.__proto__); // parent
console.log(child.__proto__.__proto__); // grandPa
console.log(child.__proto__.__proto__.__proto__); // Object Prototype

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return `${this.name} says Woof!`;
};

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping`;
};

const elton = new Dog("Elton", "Australian Shepard");

console.log(elton.toString()); // It has the access to the toString function because, it has __proto__ to bark and sleep and another Object prototype which has access for toString fucntion!
*/

/*
//  6. Classes Inheritance Prototypes
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return `${this.name} says Woof!`;
  }
  sleep() {
    return `${this.name} is sleeping`;
  }
}

class GuideDog extends Dog {
  constructor(name, breed, owner) {
    super(name, breed);
    this.owner = owner;
  }

  alert() {
    return `${this.name} alerts danger!`;
  }
}

const elon = new GuideDog("Elon", "Guided Pug", "Musk");
console.log(elon.bark());
console.log(elon.sleep());
console.log(elon.alert());
console.log(elon);
console.log(elon.__proto__); // GuideDog => alert()
console.log(elon.__proto__.__proto__); // Dog => bark(), sleep()
console.log(elon.__proto__.__proto__.__proto__); // The object Prototype
console.log(elon.__proto__.__proto__.__proto__.__proto__); // null => No more chains

// Elon is a instance of GuideDog. Elon has a prototype, on that prototype we see an object that has alert or it is an object
// That prototype object that has a reference to the prototype of dog that has bark and sleep.
// In JS, it is just chain of prototypes!
*/

/*
//  7. proto vs prototype
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return `${this.name} says Woof!`;
};

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping`;
};

// The prototype property is unique to functions. It points to the object assigned as the prototype object of instances created from dog.
// This means we can add methods like bark and sleep to the dog prototype object, which will be the prototype for instances of dog.
// We use this mainly for adding methods to the prototype.

// The __proto__ property is an internal property of an object in JavaScript, pointing to its prototype object.
// It's used by JavaScript internally, and we don't add things to it.
*/

/*
//  8. Useful Prototype Methods
const person = {
  sing() {
    return "La La La";
  },
  isHuman: true,
};

// Object.create(person);
const tom = Object.create(person);
console.log(tom); // Makes me an empty object.  Prototype => Person Objects Prototype
console.log(tom.sing());
console.log(tom.isHuman);

tom.firstName = "Tom";
console.log(tom);

console.log(Object.getPrototypeOf(tom)); // Expects a object, returns us the prototype object of it!
console.log(tom.__proto__);

Object.setPrototypeOf(tom, { isHuman: false });
console.log(tom);
console.log(tom.__proto__);

const liam = Object.create(person);
liam.firstName = "Liam";
console.log(liam);
console.log(liam.__proto__);
console.log(person.isPrototypeOf(liam)); // true
*/
