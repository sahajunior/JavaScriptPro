/*
//  1. Working With Plain Old JavaScript Objects
const pet = {
    species: 'Dog',
    name: 'Oliver',
    age: 1.5
}

console.log(pet)
console.log(pet.species)
console.log(pet['name'])
console.log(pet.age)

// Let's say
const key = 'species'
console.log(pet[key])
// pet[key] => pet['species'] => prints 'Dog'
// pet.key => This won't work

// All the key names get stringified

const dummyObj = {
    1: 'A',
    2: 'B',
    3: 'C'
}
console.log('LOC 25: ' + dummyObj[1])

dummyObj['1'] = 'Z'
console.log('LOC 28: ' + dummyObj[1])

pet.bark = function(){ return 'WOOF WOOF'}
console.log(pet.bark())
*/

/*
//  2. Mixing Data Functions With Objects

// Area of Right Triangle
function getRightTriangleArea(a, b) {
    return (a * b) / 2
}

// Hypotenuse of Right Triangle
function getRightTriangleHypotenuse(a, b){
    return Math.sqrt(a ** 2 + b ** 2)
}


console.log(getRightTriangleArea(3, 4))
console.log(getRightTriangleHypotenuse(3, 4))

// We can write in another way
const rightTriangle = {
    a: 3,
    b: 4,
    getArea: function(){
        return (a * b) / 2
    },
    getHypotenuse: function(){
        return Math.sqrt(a ** 2 + b ** 2)
    }
}


// But in both cases, we will need to create multiple instances of the same code if the dataset is too big.
// So, none of them are actually feasible

*/

/*
//  3. Class Basics

class Triangle{
    getArea() {
        return (this.a * this.b) / 2
        // Here, this does not refer to the Triangle class itself. Below, I've added 2 intances of the Triangle class. Each of them has there separate /this/
        // For myTriangle this.a = 3, this.b = 4. But for myTriangleTwo both of this.a & this.b are undefined!
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

let myTriangle = new Triangle()
myTriangle.a = 3
myTriangle.b = 4
console.log('Area: ' + myTriangle.getArea())
console.log('Hypotenuse: ' + myTriangle.getHypotenuse())

let myTriangleTwo = new Triangle()
console.log('2nd Area: ' + myTriangleTwo.getArea())
console.log('2nd Hypotenuse: ' + myTriangleTwo.getHypotenuse())

// Here, the outputs are NaN => Not a Number. But, we have access to the methods of the class. Right? Now, we can 1000 instance of the Triangle class & we don't need to redefine every time.

console.log('Type of Triangle: ' + typeof Triangle)
console.log('Type of myTriangle: ' + typeof myTriangle)
console.log(myTriangle instanceof Triangle)

*/

/*
//  4. Constructors
class Triangle{
    constructor(sideA,sideB) {
        if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`)
        if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`)
        
        // Constructor functions always just return undefined

        this.a = sideA 
        this.b = sideB 
    }

    // constructor(a,b) {
    //     this.a = a
    //     this.b = b 
    // }
    // We could write it like this. This one doesn't matter. All that matters is the arguments name in the parenthesis should match with the right side of the initialization
    getArea() {
        return (this.a * this.b) / 2

    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }

}

const myTriangle = new Triangle(5,12)
console.log(myTriangle)

const myTriangleTwo = new Triangle(3,4)
console.log(myTriangleTwo)
*/
/*

//  5. Practice Time Bank Account 
// BankAccount class
// - Properties
//      - balance (defaults to 0 if not provided)
//      - accountHolder
//      - accountNumber
// - Methods
// - deposit(amt) - increases balance by amt
// - withdraw(amt) - descreases balance by amt.

class BankAccount{
    constructor(accountHolder, accountNumber, balance){
        this.accountHolder = accountHolder
        this.accountNumber = accountNumber
        
        if(balance == undefined) this.balance = 0
        else this.balance = balance
    }

    deposit(amount) {
        if(amount < 0) {
            console.error('You can not deposit a negative amount')
        }else{
        this.balance += amount
        console.log('Currently available balance is: ' + this.balance)
        }
    }
    
    withdraw(amount) {
        if(amount > this.balance){
            console.error('Insufficient Funds')
        }else{
        this.balance -= amount
        console.log('Currently available balance is: ' + this.balance)
        }
    }
}

const person = new BankAccount('John Doe', 1)
console.log(person)
person.deposit(500)
person.withdraw(1000) 

const personTwo = new BankAccount('John Wick', '007', 600)
console.log(personTwo)
personTwo.deposit(500)
personTwo.withdraw(1100)

*/

/*
//  6. Instance Methods
class Triangle{
    getArea(){
        return (this.a * this.b) / 2
    }

    describe(){
        // return `Area is ${getArea}` [THIS WON'T WORK WITHOUT this. Irony, Ha?]
        return `Area is ${this.getArea}`
    }
}

class Triangle{
    constructor(a,b) {
        if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`)
        if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`)

        this.a = a 
        this.b = b 
    }

    getArea() {
        return (this.a * this.b) / 2
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
    defineTriangle(){
        return `The triangle with side A of ${this.a} and side B of ${this.b}, with the Hypotenuse of ${this.getHypotenuse()} has area of ${this.getArea()}`
    }

}

const myTriangle = new Triangle(3,4)
console.log(myTriangle.defineTriangle())
 */

/*
//  7. Inheritence Basics
class Triangle{
    constructor(a,b) {
        if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`)
        if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`)

        this.a = a 
        this.b = b 
    }

    getArea() {
        return (this.a * this.b) / 2
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
    describeTriangle(){
        return `I am a triangle with side A of ${this.a} and side B of ${this.b}, with the Hypotenuse of ${this.getHypotenuse()} has area of ${this.getArea()}`
    }

}

class ShyTriangle extends Triangle{
    describeTriangle(){
        return `I am a SHY triangle with side A of ${this.a} and side B of ${this.b}, with the Hypotenuse of ${this.getHypotenuse()} has area of ${this.getArea()}`
    }
}

//  ShyTriangle is an inherited clas of Triangle. That means ShyTriangle => Child Class, SubClass & Triangle => Parent Class, Mother Class or SuperClass
//  We can STILL create a class with Triangle. But now, if we want a different version of the describeTriangle method, we can call ShyTriangle
//  So, the thing is shyTriangle is just a different version of the Triangle Class. & it will get the access of all the other methods

const myTriangle = new Triangle(3,4)
console.log(myTriangle.describeTriangle()) 

const myShyTriangle = new ShyTriangle(3,4)
console.log(myShyTriangle.describeTriangle())
*/

/*
//  8. The Super Keyword
class Triangle{
    constructor(a,b) {
        if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`)
        if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`)

        this.a = a 
        this.b = b 
    }

    getArea() {
        return (this.a * this.b) / 2
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
    describeTriangle(){
        return `I am a triangle with side A of ${this.a} and side B of ${this.b}, with the Hypotenuse of ${this.getHypotenuse()} has area of ${this.getArea()}`
    }

}

class ColorTriangle extends Triangle{
    constructor(a,b, color) { // & yes, we have to maintain the serial as in first a, then b. Won't work if I write is as (b, a, color)
        // this.a = a 
        // this.b = b 
        // this.color = color
        // THE UPPER 3 LINE ain't gonna work, well 2 line -.-

        super(a, b) // This is how we call PARENT Constructor 
        this.color = color

    }

    describeTriangle(){
        return `I am a SHY triangle with side A of ${this.a} and side B of ${this.b}, with the Hypotenuse of ${this.getHypotenuse()} has area of ${this.getArea()}`
    }
}

const myColorTriangle = new ColorTriangle(3,4,'Seagreen')
console.log(myColorTriangle.color)

class ColorMoodTriangle extends ColorTriangle{
    constructor(a, b, color, mood) { 
        super(a, b, color) // This is how we call PARENT Constructor 
        this.mood = mood

    }
}

const myColorMoodTriangle = new ColorMoodTriangle(3,4,'Seagreen', 'Happy')
console.log(myColorMoodTriangle.mood)
*/

/* 
//  9. Static Properties

 class Cat{
    constructor(name, breed){
        this.name = name    // Instance Properties
        this.breed = breed
    }

    static genusSpecies = 'Felis Catus'    // This is common for all instances of Cat class & we can access it by directly from the class by writing "Cat.genusSpecies"
 }

 const blue = new Cat('blue', 'scottish fold')
 console.log(blue.genusSpecies) // This won't work. because genusSpecies is not a property of blue only or any other instances
 console.log(Cat.genusSpecies)  // This will work, because itis a property of the CLASS itself
*/

/*
//  10. Static Methods

class Cat{
    constructor(name, breed){
        this.name = name    
        this.breed = breed
    }

    static meow() {
        // return `This ${this.breed} cat says MEOW MEOW MEOW!!!` // This won't work as well!
        // return `This ${this.breed} cat says MEOW MEOW MEOW!!!`
        console.log('THIS is: ', this)
    }
    // If we use this in a static method it refers to the Class itself


    meow() {
        // return `This ${this.breed} cat says MEOW MEOW MEOW!!!` // This won't work as well!
        // return `This ${this.breed} cat says MEOW MEOW MEOW!!!`
        console.log('THIS is: ', this)
    }
    // If we use this in a non-static method or a normal method it refers to the Class's SPECIFIC Instance


    static genusSpecies = 'Felis Catus'    
}

const blue = new Cat('blue', 'scottish fold')
console.log(blue.meow()) // This won't work as the meow() is for the class, not for the blue instance.
console.log(Cat.meow())  

// Almost every other 00 language more properly calls this a "class method" not a static method,
// since it does have access to this class itself (that's what the "this" is in a JS "static method")

// More consistent 0O languages, like C++/Java/Python, also have true static methods, where they don't have access to the class itself.

*/

/*
//  11. Use Cases For Static Methods

So two examples we've seen.

One is just using static methods to group functionality together in a class, to have a nice, usable group of functions that make sense together.

Another option is to use static methods as factory functions that generate new instances.

Another example would be if we had a class called User, we might have some functionality to register a user, and that might be a static method registerUser.

It expects a username and a password.

And this will do some work to register a user and return a new instance of the User class.

It's a factory for making users.

It could live outside the class, but if it's tied to the class, why not group it in there?

So those are two common use cases for static methods.
*/
