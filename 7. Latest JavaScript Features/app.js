/*
//  1. Optional Chaining
// Function that generates a random user
// IGNORE THIS CODE, THE RELEVANT CODE IS AT THE BOTTOM OF THE FILE
function getUser() {
  // Helper function to generate a random number
  const getRandomNumber = (max) => Math.floor(Math.random() * max)

  // Possible user data
  const firstNames = ['John', 'Raj', 'Dave', 'Sarah', 'Rosa', 'Esteban']
  const lastNames = ['Hamilton', 'Norris', 'Bottas', 'Tsunoda', 'Sainz']
  const emails = ['example.com', null, 'sample.com', undefined, 'demo.com']
  const includeAddress = [true, false] // Array to determine if address should be included

  const includeMethod = [true, false] // Array to determine if method should be included

  // Randomly pick data or leave it undefined
  const firstName = firstNames[getRandomNumber(firstNames.length)]
  const lastName = lastNames[getRandomNumber(lastNames.length)]
  const emailDomain = emails[getRandomNumber(emails.length)]
  const age = getRandomNumber(100)
  const shouldIncludeMethod =
    includeMethod[getRandomNumber(includeMethod.length)]
  const shouldIncludeAddress =
    includeAddress[getRandomNumber(includeAddress.length)]

  // Construct a user object, email might be non-existent due to undefined emailDomain
  const user = {
    email: emailDomain
      ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}`
      : undefined,
    age: age, // age will always exist, just for the sake of structure
  }
  if (Math.random() > 0.5) {
    user.name = {
      first: firstName,
      last: lastName,
    }
  }

  if (shouldIncludeAddress) {
    user.address = {
      street: '1234 Elm St',
      city: 'Anytown',
      state: 'CA',
      country: 'USA',
      postalCode: '12345',
      coordinates: {
        lat: null, // let's assume the latitude is not available
        long: 35.12345, // longitude is available
      },
    }
  }

  // Sometimes include a method
  if (shouldIncludeMethod) {
    user.greet = function () {
      console.log(`HELLO THERE! I AM A USER!!!`)
    }
  }

  return user
}

const user = getUser()
console.log(user)
// const firstName = user.name.first // When not found it will give us ERROR => Uncaught TypeError: Cannot read properties of undefined (reading 'first')
const firstNameTraditional = user && user.name && user.name.first // When not found it will give us undefined. (Traditionally)
const firstNameChaining = user?.name?.first // Does the same thing as previous line, but it's more clean & we don't need to use all those &&'s! (Optional Chaining!)
console.log('First Name [Traditional]: ', firstNameTraditional)
console.log('First Name [Chaining]: ', firstNameChaining)

const longitudeTraditional =
  user &&
  user.address &&
  user.address.coordinates &&
  user.address.coordinates.long

const longitudeChaining = user?.address?.coordinates?.long
console.log('Longtitude [Traditional]: ', longitudeTraditional)
console.log('Longtitude [Chaining]: ', longitudeChaining)

user.greet?.()
*/
/*
//  2. Nullish Coalescing
// The nullish coalescing operator (??) is a logical operator that returns its right-hand operand when
// its left-hand operand is null or undefined, and otherwise returns its left-hand operand.
// This is a way to handle default values more predictably than using the OR (||) operator.

// Function that generates a random user
// IGNORE THIS CODE, THE RELEVANT CODE IS AT THE BOTTOM OF THE FILE
// Function that generates a random user
function getUser() {
  // Helper function to generate a random number
  const getRandomNumber = (max) => Math.floor(Math.random() * max)

  // Possible user data
  const firstNames = ['John', 'Raj', 'Dave', 'Sarah', 'Rosa', 'Esteban']
  const lastNames = ['Hamilton', 'Norris', 'Bottas', 'Tsunoda', 'Sainz']
  const emails = ['example.com', null, 'sample.com', undefined, 'demo.com']
  const includeAddress = [true, false] // Array to determine if address should be included

  const includeMethod = [true, false] // Array to determine if method should be included

  // Randomly pick data or leave it undefined
  const firstName = firstNames[getRandomNumber(firstNames.length)]
  const lastName = lastNames[getRandomNumber(lastNames.length)]
  const emailDomain = emails[getRandomNumber(emails.length)]
  const age = getRandomNumber(4)
  const shouldIncludeMethod =
    includeMethod[getRandomNumber(includeMethod.length)]
  const shouldIncludeAddress =
    includeAddress[getRandomNumber(includeAddress.length)]

  // Construct a user object, email might be non-existent due to undefined emailDomain
  const user = {
    email: emailDomain
      ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}`
      : undefined,
    age: Math.random() > 0.5 ? age : null, // age will always exist, just for the sake of structure
  }
  if (Math.random() > 0.5) {
    user.name = {
      first: firstName,
      last: lastName,
    }
  }

  if (shouldIncludeAddress) {
    user.address = {
      street: '1234 Elm St',
      city: 'Anytown',
      state: 'CA',
      country: 'USA',
      postalCode: '12345',
      coordinates: {
        lat: null, // let's assume the latitude is not available
        long: 35.12345, // longitude is available
      },
    }
  }

  // Sometimes include a method
  if (shouldIncludeMethod) {
    user.greet = function () {
      console.log(`HELLO THERE! I AM A USER!!!`)
    }
  }

  return user
}

const user = getUser()
console.log(user)

const firstName = user?.name?.first || 'anonymous' // Traditional => If we don't have any value for 'user?.name?.first' then the default name will be 'anonymous'
console.log('First Name: ', firstName)
// But this one has some problem
console.log(false || 'anonymous') // anonymous
console.log(0 || 'anonymous') // anonymous
// Although the left side has a value, it's giving us the right side value. Means, if we have a falsy value in the left hand side, the || operator will always return us the default or right hand sides value!
// What if we want to store the falsy value?

const lastName = user?.name?.last ?? 'Anonymous'
console.log('Last Name: ', lastName)
console.log(false ?? 'Anonymous') // false
console.log(0 ?? 'Anonymous') // 0
// ?? operator gives the value of left side only if the value is 'undefined' or 'null'. We can fetch the falsy values through this operator!

const age = user?.age || 'IDK THE AGE'
const ageNullish = user?.age ?? 'IDK THE AGE'
console.log('AGE: ', age)
console.log('AGE [Nullish]: ', ageNullish)
*/

/*
//  3. Numeric Separators
// Numeric separators enhance readability by allowing underscores (_) to be inserted between digits in numeric literals.
console.log(8000000) // 8000000
console.log(8_000_000) // 8000000
console.log(900000000000000) // 900000000000000
console.log(900_000_000_000_000) // 900000000000000
*/

/*
//  4. Array.prototype.at()
const colors = ['red', 'orange', 'yellow', 'green']
console.log(colors.at(-2)) // .at() supports negative indexing which counts from the back. -1 => last one, -2, second last one
*/

/*
//  5. String replace.All()
const str =
  'I really love cats. My cat is such an amazing pet. She loves to cuddle with me and play. What a great cAt. cat. Cat. CAT.'

console.log(str.replace('cat', 'dog')) // Replaces only the first instance
console.log(str.replace(new RegExp('cat', 'g'), 'dog')) // Replaces all the instances. RegExp must needs the global flag (g)
console.log(str.replace(new RegExp('cat', 'gi'), 'dog')) // Replaces all the instances. (i) => case sensitive to insensitive
console.log(str.replaceAll('cat', 'dog')) // Replaces all the instances of first arg with the second args [Exact Matches]
console.log(str.replaceAll(new RegExp('cat', 'gi'), 'dog'))
*/

/*
//  6. Logical OR Assignment ||=
const todo = {
  priority: '',
  task: 'Finish Something',
}

todo.priority ||= 'MEDIUM' // Is todo.priority is a falsy value? => If yes, set it to 'Medium', otherwise keep it as it is
console.log(todo.priority)
// Any falsy value in the left side will trigger the right side of the logical OR value ||=

// todo.priority || (todo.priority = 'MEDIUM')

const todoTwo = {
  priority: 'HIGH',
  task: 'Finish Something',
}

todoTwo.priority ||= 'MEDIUM' // Is todo.priority is a falsy value? => If yes, set it to 'Medium', otherwise keep it as it is
console.log(todoTwo.priority) // Remains HIGH as this isn't a falsy value
*/

/*
//  7. Logical AND Assignment &&=
let num = 10
let numTwo = 0

num &&= 50 // 50 => It will assign 50 to num if the num has a truth value
// num && (num = 50)    // Old Method to write like this!
numTwo &&= 100
console.log(num)
console.log(numTwo) // 0

let loggedInUser = { userName: 'Taco' }

if (loggedInUser) {
  loggedInUser = { ...loggedInUser, colorPreference: 'purple' }
}

loggedInUser &&= { ...loggedInUser, colorPreference: 'purple' }

// Does the same thing. 239-241 & 243
*/

/*
//  8. Nullish Coalescing Assignment ??=
// Will return the right side only if the left side is 'null' or 'undefined'

let score

score ??= 0

console.log(score) // 0 as the value because it was undefined

score ??= 100

console.log(score) // 0 as it already has the value of 0 & the value isn't null neither undefined

function doSomeSetup(options = {}) {
  options.timeout ??= 3000 // default timeout of 3 seconds
  options.retries ??= 5
  console.log(options)
}

doSomeSetup()
doSomeSetup({ timeout: 100 })
doSomeSetup({ retries: 10 })
doSomeSetup({ timeout: 0, retries: 0 })
*/

/*
//  9. Promise.any()
// Promise.any takes an iterable of Promise objects and returns a promise that is fulfilled by
// the first given promise to be fulfilled, or rejected if all of the given promises are rejected.

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

Promise.any([
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  //   fetch(`${BASE_URL}/2`),
  //   fetch(`${BASE_URL}/3`),
  //   fetch(`${BASE_URL}/4`),
  //   fetch(`${BASE_URL}/5`),
  //   fetch(`${BASE_URL}/6`),
  //   fetch(`${BASE_URL}/7`),
])
  .then((firstToFinish) =>
    console.log('This is the FIRST resolved value!', firstToFinish)
  )
  .catch((e) => console.log('ALL OF THE PROMISES WERE REJECTED', e)) // ALL OF THEM HAS TO BE REJECTED IF WE WANT catch's PORTION OF CODE TO RUN!
//  To compare with promise.race(). Race only cares about the first one, whether it is resolved or rejected!

const checkServiceA = checkAvailability('Service A')
const checkServiceB = checkAvailability('Service B')
const checkServiceC = checkAvailability('Service C')

Promise.any([checkServiceA, checkServiceB, checkServiceC])
  .then(
    (availableService) => console.log('Available Service: ', availableService) // Will return us the first one to resolved!
  )
  .catch((error) => console.error('All Services are down: ', error.errors))
*/

/**/
//  10. New OOP Features:  Private Fields Static Initialization Blocks
// Already covered in the 2. Object Oriented JavaScript
// Things like Public and Private Methods, Static Methods
