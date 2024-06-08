/*
//  1. setTimeout
// Executes a function after waiting a specific number of miliseconds
// setTimeout(function, delayInMiliseconds)

setTimeout(function () {
  console.log('Times Up!');
}, 2000);

setTimeout(function () {
  alert('I am an alert');
}, 4000);

function showNotification(message, duration) {
  const notification = document.createElement('DIV');
  notification.innerText = message;
  notification.className = 'notification';
  document.body.appendChild(notification);
}

function showNotification(message, duration) {
  const notification = document.createElement('DIV');
  notification.innerText = message;
  notification.className = 'notification';
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
    // notification.style.display = 'none';
  }, duration);
}

showNotification('You are logged in!', 5000);
showNotification('I hate you!', 3000);
showNotification('Please come again', 1000);
*/

/*
//  2. setInterval
// Executes a function repeatedly, with a fixed time delay between each call.
// setInterval(function, intervalInMiliseconds)

setInterval(function () {
  console.log("It's been 2 seconds!!!");
}, 2000);

function startCountdown(duration) {
  let secondsRemaining = duration;
  const h1 = document.querySelector('#countdown');
  h1.innerText = secondsRemaining;
  secondsRemaining--;
  setInterval(function () {
    h1.innerText = secondsRemaining;
    secondsRemaining--;
  }, 1000);
}

startCountdown(5);
*/

/*
//  3. clearInterval
function startCountdown(duration) {
  let secondsRemaining = duration;
  const h1 = document.querySelector('#countdown');
  h1.innerText = secondsRemaining;
  secondsRemaining--;
  const intervalId = setInterval(function () {
    h1.innerText = secondsRemaining;
    secondsRemaining--;

    if (secondsRemaining < 0) {
      clearInterval(intervalId);
      h1.innerText = "Time's Up";
    }
  }, 1000);
}

startCountdown(10);
*/

/*
//  4. clearTimeout
// function greet() {
//   console.log('Hello');
// }

// const setTimeoutId = setTimeout(greet, 10000);
// console.log(setTimeoutId);

// clearTimeout(setTimeoutId); // It means that cancel the timeout. That means, what set to be done after 10 seconds, it won't happen!

// Redirects to google if doesn't click on cancel in 10 seconds!

const cancelButton = document.querySelector('#cancel');

const timeoutId = setTimeout(() => {
  window.location.href = 'http://www.google.com';
}, 5000);

cancelButton.addEventListener('click', () => {
  clearTimeout(timeoutId);
  console.log('Aborted');
});
*/

/*
//  5. Debouncing
function queryAPI() {
  console.log('MAKING AN API REQUEST!!!');
}
const searchInput = document.querySelector('#search');

let debouncedTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(debouncedTimeout);
  debouncedTimeout = setTimeout(() => {
    queryAPI();
  }, 400);
});

//  => When the user types into the search input, the API request is delayed by 400 milliseconds to prevent excessive calls. Each new keystroke resets the delay.
//  => When the user don't type for 400 milisecond, that's when the call happens!
*/

/*
//  6. Writing a Fancy Debounce Function
function queryAPI(searchTerm) {
  console.log(`Searching the API for ${searchTerm}`);
}

const searchInput = document.querySelector('#search');

function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    // Collecting arguments => ...args
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedQueryAPI = debounce(queryAPI, 300);

searchInput.addEventListener('input', (evt) => {
  debouncedQueryAPI(evt.target.value);
  // queryAPI(evt.target.value);
});
*/

/*
//  7. Throttling
//  Throttling is a technique used to make sure a function is called at most ONE time within some duration
function getRandomColor() {
  const palette = [
    '#FFADAD',
    '#FFC3A0',
    '#FF677D',
    '#392F5A',
    '#31A2AC',
    '#61C0BF',
    '#6B4226',
    '#D9BF77',
    '#ACD8AA',
    '#FFE156',
    '#6A0572',
    '#AB83A1',
  ];

  const randomIndex = Math.floor(Math.random() * palette.length);
  return palette[randomIndex];
}
const content = document.getElementById('content');

function loadMoreItems() {
  const scrollDistanceToBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  if (scrollDistanceToBottom < 200) {
    console.log('LOADING DATA FROM AN API!!!');
    for (let i = 0; i < 10; i++) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.textContent = 'Item ' + (content.children.length + 1);
      item.style.backgroundColor = getRandomColor();
      content.appendChild(item);
    }
  }
}

let isThrottled = false;
window.addEventListener('scroll', () => {
  if (!isThrottled) {
    loadMoreItems();
  }
  isThrottled = true;
  setTimeout(() => {
    isThrottled = false;
  }, 300);
});

// Initial load
loadMoreItems();
*/

/*
//  8. Building a Fancy Throttle Function
function getRandomColor() {
  const palette = [
    '#FFADAD',
    '#FFC3A0',
    '#FF677D',
    '#392F5A',
    '#31A2AC',
    '#61C0BF',
    '#6B4226',
    '#D9BF77',
    '#ACD8AA',
    '#FFE156',
    '#6A0572',
    '#AB83A1',
  ];

  const randomIndex = Math.floor(Math.random() * palette.length);
  return palette[randomIndex];
}
const content = document.getElementById('content');

function loadMoreItems() {
  const scrollDistanceToBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  if (scrollDistanceToBottom < 200) {
    console.log('LOADING DATA FROM AN API!!!');
    for (let i = 0; i < 10; i++) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.textContent = 'Item ' + (content.children.length + 1);
      item.style.backgroundColor = getRandomColor();
      content.appendChild(item);
    }
  }
}

function throttle(callback, delay = 500) {
  let isThrottled = false; // Should we throttle or not?
  let savedArgs = null;

  const executeCallback = () => {
    if (savedArgs === null) {
      isThrottled = false;
    } else {
      callback(...savedArgs);
      savedArgs = null;
      setTimeout(executeCallback, delay);
    }
  };

  return (...args) => {
    if (isThrottled) {
      savedArgs = args;
      return;
    }

    callback(...args);
    isThrottled = true;
    setTimeout(executeCallback, delay);
  };
}

const throttledLoadItems = throttle(loadMoreItems, 300);

window.addEventListener('scroll', () => {
  throttledLoadItems();
});

// Initial load
loadMoreItems();
*/

/*
//  9. requestAnimationFrame Basics

//  requestAnimationFrame runs on bunch of factors on the user's pc. It depends on which device the code is running. It's automated.

const boxInterval = document.getElementById('boxInterval');
const boxAnimationFrame = document.getElementById('boxAnimationFrame');

let intervalAngle = 0;
let animationFrameAngle = 0;

function animateWithInterval() {
  boxInterval.style.transform = 'rotate(' + intervalAngle + 'deg)';
  intervalAngle += 2;
}

function animateWithAnimationFrame() {
  boxAnimationFrame.style.transform = 'rotate(' + animationFrameAngle + 'deg)';
  animationFrameAngle += 2;
  requestAnimationFrame(animateWithAnimationFrame); // We're calling it here because LOC 309 runs only once. & if we want to continue it, we need to call is repeatedly!
}

// Start the animations
setInterval(animateWithInterval, 16); // 60 FPS (approximately)

requestAnimationFrame(animateWithAnimationFrame);
*/

/*
//  10. requestAnimationFrame With Timestamps
const boxInterval = document.getElementById('boxInterval');
const boxAnimationFrame = document.getElementById('boxAnimationFrame');

let intervalAngle = 0;
let animationFrameAngle = 0;

function animateWithInterval() {
  boxInterval.style.transform = 'rotate(' + intervalAngle + 'deg)';
  intervalAngle += 2;
}

let previousTime;
function animateWithAnimationFrame(currentTime) {
  console.log(currentTime - previousTime);
  previousTime = currentTime;
  boxAnimationFrame.style.transform = 'rotate(' + animationFrameAngle + 'deg)';
  animationFrameAngle += 2;
  requestAnimationFrame(animateWithAnimationFrame);
}

// Start the animations
setInterval(animateWithInterval, 16); // 60 FPS (approximately)

requestAnimationFrame(animateWithAnimationFrame);

// requestAnimationFrame automatically provides us a timestamp, it gives us how much time has elapsed between the previous runtime of the function & the current runtime of the function in miliseconds!
*/

/*
//  11. Scroll To Top Animation With RequestAnimationFrame
function smoothScrollToTop() {
  const duration = 1000; // Duration in milliseconds to how much time it takes to load!
  const start = window.scrollY; // 'pageYOffset' is deprecated. Current vertical position of scroll. Where the user landed from top to bottom or middle!
  // console.log(start);
  const end = 0; // Where user want to scroll to stop!
  const change = end - start; // Position needed to get back to the top!
  let startTime = null; // For animation, elapsed time

  function animateScroll(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    // console.log(timeElapsed);
    const progress = Math.min(timeElapsed / duration, 1);
    console.log(progress);

    window.scrollTo(0, start + change * progress);
    // console.log(timeElapsed);

    // If the the timeElapsed is less than the total duration to complete, keep doing it!
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

document
  .querySelector('.back-to-top')
  .addEventListener('click', smoothScrollToTop);
*/
