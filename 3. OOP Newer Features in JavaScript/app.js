/*

//  1. Getters
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //   getDiameter() {
  //     return this.radius * 2;    // This work's as well
  //   }

  get diameter() {
    return this.radius * 2;
    // But, this will be working as a property, not a method! It is a method or function behind the scene. So, it does act like a property but can have the function logic behind!
  }
}

const circle = new Circle(4);
console.log(circle.diameter); // We don't need to add those parenthesis (()).

*/

/*

//  2. Setters
class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);

  constructor(radius, color) {
    this.setRadius(radius);
    this.setColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("Not a allowed color!");
    }
  }

  setRadius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }

  get radius() {
    return this._radius;
  }

  get color() {
    return this._color;
  }

  set radius(value) {
    this.setRadius(value);
  }

  set color(newColor) {
    this.setColor(newColor);
  }
}

const circle = new Circle(5, "red");
circle.color = "red";
circle.color = "lime";
circle.radius = 21;
circle.radius = -21;

*/

/*
//  3. Practice Time Getters and Setters
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newName) {
    const [firstName, lastName] = newName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
*/

/*
//  4. Public Fields
class Cat {
  static species = "Felis Catus";
  static numberOfCats = 0;
  name;
  breed;
  numberOfLegs = 4;
  hasFur = true;

  // Public Fields: We can access them from the outside of the class. Those which are not in the constructor gets a default value.
  // It's better if we keep all the values in top, so we can see them at a glance.
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  amputate() {
    this.numberOfLegs -= 1;
  }
  shearing() {
    this.hasFur = false;
  }
}

const oliver = new Cat("Oliver", "Persian");
console.log(oliver.name); // Oliver
console.log(oliver.breed); // Persian
oliver.amputate();
console.log(oliver.numberOfLegs); // 3
oliver.shearing();
console.log(oliver.hasFur); // false

const blue = new Cat();
console.log(blue.name); // undefined
console.log(blue.breed); // undefined
blue.name = "blue";
console.log(blue.name); // blue
blue.breed = "Maine Coon";
console.log(blue.breed); // Maine Coon
*/

/*
//  5. Private Fields
class Circle {
  #radius; // We have define this if we want to make it private unlike public fields

  constructor(radius) {
    this.#radius = radius;
  }

  getRadius() {
    return this.#radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // Cannot access this! As this is private with the symbol #
//  myCircle.#radius = 10; //  VS Code Error Log: Property '#radius' is not accessible outside class 'Circle' because it has a private identifier.
//  console.log(myCircle.#radius); // VS Code Error Log: Property '#radius' is not accessible outside class 'Circle' because it has a private identifier.
console.log(myCircle.getRadius()); // 5
*/

/*
//  6. Private Methods
class MyClass {
  //  #privateMethod; // Unlike Private Fields we cannot use that. We don't need to define this beforehand!

  #privateMethod() {
    console.log("Private Method Called!!!");
  }

  publicMethod() {
    this.#privateMethod();  // Accessible within the class
  }
}

const myClass = new MyClass();
//  myClass.#privateMethod(); //  VS Code Error Log: Property '#privateMethod' is not accessible outside class 'MyClass' because it has a private identifier.
myClass.publicMethod(); //  Private Method Called!!!
*/

/*
//  7. ES2022 Static Initialization Blocks
class MyClass {
  static {
    console.log("Class is Loaded!");
  }
}
new MyClass(); // It will run when the class is loaded. And it will run only ONCE! Even if I create 10,000 instances of the class, it will run only ONCE!

class DatabaseConnection {
  static connection;
  static {
    if (process.env.NODE_ENV === "production") {
      this.connection = this.loadProductionConnection();
    } else {
      this.connection = this.loadDevelopmentConnection();
    }
  }
  // This just looks cleaner & we can bind a lot of logic without being them in one block of huge block

  static loadProductionConnection() {}
  static loadDevelopmentConnection() {}
}
*/
