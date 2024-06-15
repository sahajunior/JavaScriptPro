/*
//  1. The Basics of Fetch
const POKE_URL = 'https://pokeapi.co/api/v2/pokemon';

async function getPokemon() {
  const response = await fetch(POKE_URL);
  const data = await response.json();
  console.log(data);
}
    // fetch returns us a ReadableStream & if we want the data to be visible to us we need to convert.
    // Here we are dealing with JSON api so, On LOC 7, I converted the data to JSON!
getPokemon();

fetch(POKE_URL)
  .then((res) => res.json())
  .then((data) => console.log(data));
*/

// const { POST } = require('superagent');

/*
//  2. Error Handling With Fetch
const POKE_URL = 'https://pokeapi.co/api/v2/pokemon/ThrowingWrongURL:P';

// async function getPokemon() {
//   try {
//     const response = await fetch(POKE_URL);
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log('SOMETHING WENT WRONG', e);
//   }
// }

async function getPokemon() {
  try {
    const response = await fetch(POKE_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log('SOMETHING WENT WRONG', e);
  }
}

getPokemon();

// fetch(POKE_URL)
//   .then((response) => {
//     console.log('THE FETCH WORKED!');
//     console.log(response);
//   })
//   .catch((e) => console.log('SOMETHING WENT WRONGGG', e));

// Runs these 2 lines: console.log('THE FETCH WORKED!');  console.log(response);
// Fetch will only return us error, only if there is a network error! (Wi-Fi OFF)

fetch(POKE_URL)
  .then((response) => {
    console.log('THE FETCH WORKED!');
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log('JSON DATA', data))
  .catch((e) => console.log('SOMETHING WENT WRONGGG', e));
*/

/*
//  3. Sending Request Headers With Fetch
//  This is where the API project is running: http://localhost:4001/showmeheaders
async function showMeHeaders() {
  const headers = new Headers({ 'content-type': 'application/json' });
  try {
    const res = await fetch('http://localhost:4001/showmeheaders', { headers });
    const data = await res.json();
    console.log('DATA: ', data);
  } catch (e) {
    console.log(e);
  }
}

showMeHeaders();

async function getSecret() {
  const headers = new Headers({
    'content-type': 'application/json',
    authorization: 'Bearer JUST_IMAGINE_IT_IS_A_BROWSER_TOKEN',
  });

  try {
    const res = await fetch('http://localhost:4001/secret', { headers });
    const data = await res.json();
    console.log('DATA: ', data);
  } catch (e) {
    console.log(e);
  }
}

getSecret();
*/

/*
//  4. POST Requests With Fetch
async function postData() {
  const payload = {
    handle: 'Archie',
    name: 'Hater of Telly',
    description: 'IDK why we hate telly',
    numEmployees: 69,
    logoUrl: 'https://www.fakehub.com',
  };
  await fetch('http://localhost:4001/companies', {
    method: 'POST',
    'content-type': 'application/json',
    body: JSON.stringify(payload),
  });
}

async function getCompany() {
  const response = await fetch('http://localhost:4001/companies/Archie');
  const data = await response.json();
  console.log(data);
}

postData();
getCompany();
*/

/*
//  5. Uploading Files With Fetch
async function uploadLogo() {
  try {
    const res = await fetch(
      'http://localhost:4001/companies/Archie/upload-logo',
      {
        method: 'POST',
        body: formData,
      }
    );
    const result = await response.json();
    console.log(res);
  } catch (e) {
    console.log('Error in uploading logo', e);
  }
}

const fileInput = document.querySelector('#fileUpload');
fileInput.addEventListener('change', (e) => {
  console.log('Changed');
  const formData = new FormData();
  formData.append('logo', fileInput.files[0]);
  uploadLogo(formData);
});
*/
