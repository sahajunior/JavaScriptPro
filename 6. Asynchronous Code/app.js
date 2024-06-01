/*
// 1. Callbacks: Our Good Friend
// A callback is a function passed to another function, for it to call!

// First two cases will always be done with callbacks:
// [1] Functional programming patterns   => mapa, reduce, filter. provide a function as argument
// [2] Event-driven programming  =>  click, hover [DOM Manipulation]

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// [1] Functional programming patterns
// nums.filter(function (num) {
//   return num % 2 === 0;
// });

console.log(nums.filter((num) => num % 2 === 0))

// Event-driven Programming
// It's just fancy way of saying DOM Manipulation
// Like, calling a button, when it is click do this function

const btn = document.querySelector('#myBtn')

function sayHi() {
  alert('HELLO!!!')
}

// [2] Event-driven programming
btn.addEventListener('click', sayHi)

setTimeout(sayHi, 3000) // Proving this to execute for later period of time! Asynchronus Code!
*/

/*
//  2. Callback Hell & The Pyramid of Doom

// Callback Hell!
var response = ajaxLibrary.get('/page1', function (response) {
  console.log(response)
  ajaxLibrary.get('/page2', function (response2) {
    console.log(response2)
    ajaxLibrary.get('/page3', function (response3) {
      console.log(response3)
      ajaxLibrary.get('/page4', function (response4) {
        console.log(response4)
      })
    })
  })
})

// Nightmare, Mess, Hell, UGH!!!!!!!
fs.readFile('file1.txt', 'utf8', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    fs.readFile('file2.txt', 'utf8', function (err, data) {
      if (err) {
        console.log(err)
      } else {
        fs.readFile('file3.txt', 'utf8', function (err, data) {
          if (err) {
            console.log(err)
          } else {
            console.log(data)
          }
        })
      }
    })
  }
})

// JS is single-threaded, means only one bit of code can run at once
// Developers used to write code like those before the the invention of Promises.
// Otherwise we had to stop all the events that should run.
*/

/*
//  3. The Basics of Promises
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const url = `${BASE_URL}/1`

fetch(url) // GET Request => We get data or failure
// First it gets to pending!
// If we expand the Promise object, in the PromiseState we can see whether it is fulfilled(Resolved) or rejected


// => Promises in JS are objects!
// => They are native to the language as of ES2015 or ES6
// => A promise can be in one of three states: (NOT JUST FOR FETCH! FETCH is the easiest way to demonstrate promises)
//   1. Pending => It doesn't yet have a value
//   2. Resolved => It has successfullt obtained a value
//   3. Rejected => It failed to obtain a value for some reason
// => The only way to access the resolved or rejected value is to chain a method on the end of the promise (or await it)

// => Promises are object representing either the eventual completion or failure of some operation that's asynchronus.
*/

/*
//  4. Using .then() and .catch()

//  => Promises provide a .then and a .catch, which both accept callbacks.
//  => The callback to .then will run if the promise is resolved, and has access to the promise's resolved value.
//  => The callback to .catch will run if the promise is rejected, and typically has access to to some reason behind the rejection.

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const url = `${BASE_URL}/1`

// fetch(url)
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (err) {
//     console.log('ERROR: ', err)
//   })

fetch(url)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
*/

/*
//  5. Promise Chaining To Flatten Code
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

// Make request to pokemon/1
// then make request to pokemon/2
// then make request to pokemon/3
// then make  request to pokemon/4

//  ANOTHER CALLBACK HELL!
// fetch(`${BASE_URL}/1`)
//   .then((res1) => {
//     console.log('RESPONSE 1: ', res1)
//     fetch(`${BASE_URL}/2`)
//       .then((res2) => {
//         console.log('RESPONSE 2: ', res2)
//         fetch(`${BASE_URL}/3`)
//           .then((res3) => {
//             console.log('RESPONSE 2: ', res3)
//             fetch(`${BASE_URL}/4`)
//               .then((res4) => {
//                 console.log('RESPONSE 4: ', res4)
//               })
//               .catch((err) => console.log('ERROR: ', err))
//           })
//           .catch((err) => console.log('ERROR: ', err))
//       })
//       .catch((err) => console.log('ERROR: ', err))
//   })
//   .catch((err) => console.log('ERROR: ', err))

// Flattened Code!
fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log('RESPONSE 1 ', res1)
    return fetch(`${BASE_URL}/2`)
  })
  .then((res2) => {
    console.log('RESPONSE 2: ', res2)
    return fetch(`${BASE_URL}/3`)
  })
  .then((res3) => {
    console.log('RESPONSE 3: ', res3)
    return fetch(`${BASE_URL}/4`)
  })
  .then((res4) => console.log('RESPONSE 4: ', res4))
*/

/*
//  6. Error Handling With Promises

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log('RESPONSE 1 ', res1)
    return fetch(`http://nope/nope`)
  })
  .then((res2) => {
    console.log('RESPONSE 2: ', res2)
    return fetch(`${BASE_URL}/3`)
  })
  .then((res3) => {
    console.log('RESPONSE 3: ', res3)
    return fetch(`${BASE_URL}/4`)
  })
  .then((res4) => console.log('RESPONSE 4: ', res4))
  .catch((err) => console.log('IN THE CATCH! ERROR: ', err))

  // We only need 1 catch for all the errors!
*/

/*
//  7. Async / Await Basics

//  => We can declare any function in JS as async
//  => async functions always return promises!
//  => In async function, we write code that looks synchronus
//      => But it doesn't block JS. It can do other stuff!

//  => Inside an async function, we can use await
//  => await pauses execution
//  => Can await any promise (e.g, other async functions!)
//  => await waits for promise to resolve & evaluate to its resolved value
//  => It then resumes execution
//  => Think of the await keyword like a pause button

function hello() {
  return 'Hello'
}

async function hi() {
  return 'Hi' // Async functions always return promises!
}

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

// function getFirstPokemon() {
//   const res = fetch(`${BASE_URL}/1`)
//   console.log(res) // Doesn't gives us the value, because it doesn't wait to get the value. & it will return us a pending promise
// }

// getFirstPokemon()

async function getFirstPokemon() {
  const res = await fetch(`${BASE_URL}/1`) //  We have to use await & async both!
  console.log(res) // This line doesn't run until we get the response
}

getFirstPokemon()

fetch(`${BASE_URL}/1`).then((res1) => console.log('Response 1: ', res1))

//  225 - 228 & 232 are the same code. Does the exact same thing. Only difference is we don't have to deal with .thens
*/

/*
//  8. More on Async / Await

//  Previously
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log('RESPONSE 1 ', res1)
    return fetch(`${BASE_URL}/2`)
  })
  .then((res2) => {
    console.log('RESPONSE 2: ', res2)
    return fetch(`${BASE_URL}/3`)
  })
  .then((res3) => {
    console.log('RESPONSE 3: ', res3)
    return fetch(`${BASE_URL}/4`)
  })
  .then((res4) => console.log('RESPONSE 4: ', res4))

async function getFourPokemon() {
  const res1 = await fetch(`${BASE_URL}/1`)
  console.log(res1)

  const res2 = await fetch(`${BASE_URL}/2`)
  console.log(res2)

  const res3 = await fetch(`${BASE_URL}/3`)
  console.log(res3)

  const res4 = await fetch(`${BASE_URL}/4`)
  console.log(res4)
}

getFourPokemon()

// Same code, but we aren't using callbacks!
*/

/*
//  9. Error Handling With Async Functions

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log('RESPONSE 1 ', res1)
    return fetch(`${BASE_URL}/2`)
  })
  .then((res2) => {
    console.log('RESPONSE 2: ', res2)
    return fetch(`${BASE_URL}/3`)
  })
  .then((res3) => {
    console.log('RESPONSE 3: ', res3)
    return fetch(`${BASE_URL}/4`)
  })
  .then((res4) => console.log('RESPONSE 4: ', res4))
  .catch((err) => console.log('ERROR: ', err))

async function getFourPokemon() {
  try {
    const res1 = await fetch(`${BASE_URL}/1`)
    console.log(res1)

    const res2 = await fetch(`${BASE_URL}/2`)
    console.log(res2)

    const res3 = await fetch(`http://nope.nope`)
    console.log(res3)

    const res4 = await fetch(`${BASE_URL}/4`)
    console.log(res4)
  } catch (err) {
    console.log('Something went wrong!', err)
  }
}

getFourPokemon()

async function fetchFake() {
  try {
    const res = await fetch('http://nope.nope')
    console.log(res)
  } catch (err) {
    console.log('Something went wrong!', err)
  }
}

fetchFake()
*/

/*
//  10. Async Patterns Parallel Async Operations
//  There are a few cases where it's easy to deal with promises directly
//  ===================================== //
//  ===================================== //
//  ===================================== //

//  BASE Promises

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const results = []

fetch(`${BASE_URL}/1`).then((result) => {
  results.push(result)
  console.log('REQUEST 1 FINISHED!')
})

fetch(`${BASE_URL}/2`).then((result) => {
  results.push(result)
  console.log('REQUEST 2 FINISHED!')
})

fetch(`${BASE_URL}/3`).then((result) => {
  results.push(result)
  console.log('REQUEST 3 FINISHED!')
})

console.log('Waiting')
console.log('Results One: ', results)

// Previously it had to wait for the first call. Like, if the first call fails then we won't get to do the other things
// But here, these are not connected, as soon as the fetch is done, it will push the result into the results array

//  ===================================== //
//  ===================================== //
//  ===================================== //

//  Async/Await

const resultsTwo = []

async function getPokemon1() {
  const res = await fetch(`${BASE_URL}/1`)
  resultsTwo.push(res)
  console.log('REQUEST 1 FINISHED!')
}

async function getPokemon2() {
  const res = await fetch(`${BASE_URL}/2`)
  resultsTwo.push(res)
  console.log('REQUEST 2 FINISHED!')
}

async function getPokemon3() {
  const res = await fetch(`${BASE_URL}/3`)
  resultsTwo.push(res)
  console.log('REQUEST 3 FINISHED!')
}

getPokemon1()
getPokemon2()
getPokemon3()
console.log('Results Two: ', resultsTwo)
console.log('WAITING FOR REQUESTS TO COMPLETE!')

//  Refactored
const resultsThree = []
async function getPokemon(num) {
  const res = await fetch(`${BASE_URL}/${num}`)
  resultsThree.push(res)
  console.log(`REQUEST ${num} FINISHED`)
}

getPokemon(1)
getPokemon(2)
getPokemon(3)

console.log('Results Three: ', resultsThree)
*/

/*
//  11. Async Patterns Sequential Async Operations

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
// const results = []

// fetch(`${BASE_URL}/1`)
//   .then((res) => {
//     results.push(res)
//     console.log('REQUEST 1 FINISHED')
//     return fetch(`${BASE_URL}/2`)
//   })
//   .then((res) => {
//     results.push(res)
//     console.log('REQUEST 2 FINISHED')
//     return fetch(`${BASE_URL}/3`)
//   })
//   .then((res) => {
//     results.push(res)
//     console.log('REQUEST 3 FINISHED')
//   })

// console.log(results)

async function get3PokemonSequential() {
  const res1 = await fetch(`${BASE_URL}/1`)
  console.log('REQUEST 1 FINISHED')

  const res2 = await fetch(`${BASE_URL}/2`)
  console.log('REQUEST 2 FINISHED')

  const res3 = await fetch(`${BASE_URL}/3`)
  console.log('REQUEST 3 FINISHED')

  console.log([res1, res2, res3])
}

get3PokemonSequential()
*/

/*
//  12. Async Patterns Promise.all()

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const fetches = [
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  // fetch(`http://nope.nope`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
]

// console.log(fetches)

// Promise.all(fetches)
//   .then((results) => {
//     console.log('Promise.all() is done and resolved!')
//     console.log(results)
//   })
//   .catch((e) => {
//     console.log('ONE of the promises was rejected!')
//     console.log(e)
//   })

async function getLotsOfPokemon() {
  try {
    const results = await Promise.all(fetches)
    console.log('Promise.all() is done and resolved!')
    console.log(results)
  } catch (e) {
    console.log('ONE of the promises was rejected!')
    console.log(e)
  }
}
// getLotsOfPokemon()
console.log(getLotsOfPokemon())
// Promise.all accepts an array of promises and returns a new promise
// New promise will resolve when every promise in array resolves, and will be rejected if any promise in array is rejected
*/

/*
//  13. Async Patterns Promise.allSettled()
// Promise.allSettled accepts an array of promises and returns a new promise
// The promise resolves after all of the given promises have either fulfilled or rejected, with an array of [objects] that each describes the outcome of each promise.

async function allSettled() {
  const GITHUB_BASE_URL = 'https://api.github.com'

  let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`)

  let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`)

  let badUrl = fetch('http://definitelynotarealsite.com')

  let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`)

  let anotherbadUrl = fetch('http://definitelynotarealsite.com')

  let results = await Promise.allSettled([
    elieP,
    joelP,
    badUrl,
    coltP,
    anotherbadUrl,
  ])

  console.log('Results', results)
  const fulfilled = results.filter((r) => r.status === 'fulfilled')
  const rejected = results.filter((r) => r.status === 'rejected')
  console.log('Fulfilled', fulfilled)
  console.log('Rejected: ', rejected)
}

allSettled()
*/

/*
//  14. Async Patterns Promise.race()
// Promise race accepts an array of promises and returns a new promise
// This new promise will resolve or reject as soon as one promise in the array resolves or rejects

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const fetches = [
  fetch(`http://nope.nope`),
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
]

Promise.race(fetches)
  .then((winner) => console.log('I AM THE WINNER!', winner))
  .catch((loser) => console.log('I AM THE LOSER: ', loser))
*/

/*
//  15. Building Our Own Promise Objects
// function wait(duration) {
//   const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve('This is the resolved value') // It has to be executed as a function!
//     }, duration)
//   })
//   return p
// }

// async function demo() {
//   console.log('Hi')
//   const val = await wait(2000)
//   console.log('There')
//   console.log(val)
// }

// demo()

// wait().then((r) => console.log(r))

function randomRejectResolve() {
  const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      const random = Math.random()
      if (random < 0.5) {
        resolve('Resolved!!!!')
      } else {
        reject('Rejected!!!!')
      }
    }, 2000)
  })
  return p
}

randomRejectResolve()
  .then((value) => {
    console.log('INSIDE first .then() callback: ', value)
    return randomRejectResolve()
  })
  .then((value) => {
    console.log('INSIDE second .then() callback: ', value)
    return randomRejectResolve()
  })
  .then((value) => {
    console.log('INSIDE third .then() callback: ', value)
  })
  .catch((e) => {
    console.log('INSIDE CATCH: ', e)
  })
*/

/*
//  16. Promisifying Node's fs.readFile()
const fs = require('fs')

fs.readFile('./haiku1.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('ERR!!!', err)
  } else {
    console.log('HAIKU 1')
    console.log(data)
    fs.readFile('./haiku2.txt', 'utf8', (err, data) => {
      if (err) {
        console.log('ERR!!!', err)
      } else {
        console.log('HAIKU 2')
        console.log(data)
        fs.readFile('./haiku3.txt', 'utf8', (err, data) => {
          if (err) {
            console.log('ERR!!!', err)
          } else {
            console.log('HAIKU 3')
            console.log(data)
          }
        })
      }
    })
  }
})

function asyncReadFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

asyncReadFile('./haiku1.txt')
  .then((data) => {
    console.log('HAIKU 1')
    console.log(data)
    return asyncReadFile('./haiku2.txt')
  })
  .then((data) => {
    console.log('HAIKU 2')
    console.log(data)
    return asyncReadFile('./haiku3.txt')
  })
  .then((data) => {
    console.log('HAIKU 3')
    console.log(data)
    return asyncReadFile('./haiku4.txt')
  })
  .then((data) => {
    console.log('HAIKU 4')
    console.log(data)
  })
  .catch((err) => console.log('ERR!!!', err))

async function getHaikus() {
  try {
    const haikuOne = await asyncReadFile('./haiku1.txt')
    console.log('HAIKU One')
    console.log(haikuOne)

    const haikuTwo = await asyncReadFile('./haiku2.txt')
    console.log('HAIKU Two')
    console.log(haikuTwo)

    const haikuThree = await asyncReadFile('./haiku3.txt')
    console.log('HAIKU Three')
    console.log(haikuThree)

    //  FOR ERROR!
    // const haikuFour = await asyncReadFile('./haiku4.txt')
    // console.log('HAIKU Four')
    // console.log(haikuFour)
  } catch (e) {
    console.log('ERRR!!!')
    console.log(e)
  }
}

getHaikus()
*/
