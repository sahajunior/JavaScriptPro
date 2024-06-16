/*
//  1. LocalStorage Basics
//  LocalStorage: Allows web applications to store key-value pairs in a web broser persistently accross sessions.
localStorage.setItem('color', 'magenta');
localStorage.getItem('color'); // magenta
localStorage.removeItem('color');
localStorage.getItem('color'); // null
localStorage.setItem('color', 'blue');
localStorage.setItem('username', 'nir');
localStorage.clear(); // clears the localStorage for the particular domain!
*/

/*
//  2. LocalStorage With Complex Objects
// LocalStorages can only store as string.
localStorage.setItem('score', 69);
localStorage.getItem('score'); // '69'

const nums = [1, 2, 3, 4];
// localStorage.setItem('nums', nums);
// localStorage.getItem('nums'); // '1,2,3,4' [Comma seperated string]
localStorage.removeItem('nums');

localStorage.setItem('nums', JSON.stringify(nums));
JSON.parse(localStorage.getItem('nums')); // (4) [1, 2, 3, 4]
*/

/*
//  3. What Should Should Not Go In LocalStorage
//  => Only non-sensitive informations such as user preferences, history of user (what pages they browsed), shopping cart data, analytics should go in LocalStorage
*/

/*
//  4. Creating a Darkmode Toggle With LocalStorage

const toggleButton = document.querySelector('#toggleMode');

const toggleTheme = () => {
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark-mode');
    toggleButton.innerText = 'Enable Dark Mode';
  } else {
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark-mode');
    toggleButton.innerText = 'Enable Light Mode';
  }
};
toggleButton.addEventListener('click', () => toggleTheme());

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.innerText = 'Enable Light Mode';
  }
};

applySavedTheme();
*/

/*
//  5. Localstorage Notes App Demo
const textArea = document.getElementById('noteInput');
const saveButton = document.getElementById('saveNote');
const container = document.getElementById('notesContainer');

// const notes = ['Walk the dog', 'Remember to die!'];
// localStorage.setItem('notes', JSON.stringify(notes));

const loadNotes = () => {
  const notes = JSON.parse(localStorage.getItem('notes')) ?? [];
  notes.forEach(createNoteElement);
};

const createNoteElement = (content) => {
  const noteElement = document.createElement('li');
  noteElement.textContent = content;
  container.appendChild(noteElement);
};

saveButton.addEventListener('click', () => {
  const noteContent = textArea.value.trim();
  createNoteElement(noteContent);
  textArea.value = '';
  const notes = JSON.parse(localStorage.getItem('notes')) ?? [];
  notes.push(noteContent);
  localStorage.setItem('notes', JSON.stringify(notes));
});

loadNotes();

// OOP WAY 
class NoteApp {
  constructor(containerSelector, inputSelector, saveButtonSelector) {
    this.container = document.querySelector(containerSelector);
    this.textArea = document.querySelector(inputSelector);
    this.saveButton = document.querySelector(saveButtonSelector);
    this.notes = JSON.parse(localStorage.getItem('notes')) ?? [];

    this.saveButton.addEventListener('click', () => this.saveNote());
    this.loadNotes();
  }

  loadNotes() {
    this.notes.forEach((note) => this.createNoteElement(note));
  }

  createNoteElement(content) {
    const noteElement = document.createElement('li');
    noteElement.textContent = content;
    this.container.appendChild(noteElement);
  }

  saveNote() {
    const noteContent = this.textArea.value.trim();
    if (noteContent) {
      this.createNoteElement(noteContent);
      this.textArea.value = '';
      this.notes.push(noteContent);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}

new NoteApp('#notesContainer', '#noteInput', '#saveNote');
*/

/*
//  6. Syncing Tabs With The Storage Event
const toggleButton = document.querySelector('#toggleMode');

const toggleTheme = () => {
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark-mode');
    toggleButton.innerText = 'Enable Dark Mode';
  } else {
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark-mode');
    toggleButton.innerText = 'Enable Light Mode';
  }
};
toggleButton.addEventListener('click', () => toggleTheme());

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.innerText = 'Enable Light Mode';
  } else {
    document.body.classList.remove('dark-mode');
    toggleButton.innerText = 'Enable Dark Mode';
  }
};

applySavedTheme();

// To keep multiple pages open in multiple windows to keep in sync
window.addEventListener('storage', (e) => {
  if (e.key === 'theme') {
    applySavedTheme();
  }
});
*/

/*
//  7. SessionStorage Basics
//  sessionStorage => Allows web applications to store key-value pairs in a web browser for a single session.
//  Can reload, refresh, but won't merge with another web page of the same website.

sessionStorage.setItem('color', 'teal');
sessionStorage.getItem('color');
// Will apply on all pages as I am wrote it on the codebase.
// But if I write it on the console it won't display on all the pages, instead it will display only on the page where I declare them.

function warnOnce() {
  if (!sessionStorage.getItem('shownWarning')) {
    console.log('Warning!! Site will be down after 15 days!');
  }
  sessionStorage.setItem('shownWarning', 'true');
}

warnOnce();

// When I want to do something once per session, that's where the sessionStorage comes handy!
*/

/*
//  8. Session Storage Form Demo

const searchField = document.getElementById('searchField');
searchField.addEventListener('input', (e) => {
  sessionStorage.setItem('searchField', e.target.value);
});

const populateSearch = () => {
  const previousSearch = sessionStorage.getItem('searchField');
  searchField.value = previousSearch;
};

populateSearch();

const form = document.getElementById('checkoutForm');
form.addEventListener('input', (e) => {
  const { name, value } = e.target;
  const formData = JSON.parse(sessionStorage.getItem('formData')) ?? {};
  formData[name] = value;
  sessionStorage.setItem('formData', JSON.stringify(formData));
});

const populateForm = () => {
  const formData = JSON.parse(sessionStorage.getItem('formData')) ?? {};
  // form.elements
  // form.elements['firstName'];
  // form.elements['firstName'].value = 'Sam';
  // form.elements['firstName'].value;
  for (let field in formData) {
    form.elements[field].value = formData[field];
  }
};

populateForm();
*/

/*
//  9. IndexedDB Enter At Your Own Risk
//  IndexedDB => A low-level API for storing structured data, including large datasets
// const largeString = new Array(5 * 1024 * 1025 + 1).join('a');
// console.log(largeString); // 5.2 MB
// localStorage.setItem('bigString', largeString); // Uncaught DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'bigString' exceeded the quota.

const open = indexedDB.open('FirstDB', 1);
// Requires if the DB needs upgrade or created for the first time

open.onupgradeneeded = () => {
  const db = open.result;
  db.createObjectStore('MyUserStore', { keyPath: 'id' });
};

open.onsuccess = () => {
  console.log('SUCCESS!!!');
  const db = open.result;
  const transaction = db.transaction('MyUserStore', 'readwrite');
  const store = transaction.objectStore('MyUserStore');

  store.put({ id: 1, username: 'Berry', age: 69 });
  store.put({ id: 2, username: 'Brandy', age: 9 });
  store.put({ id: 3, username: 'Brandon', age: 12 });
  store.put({ id: 4, username: 'Brady', age: 34 });
  const largeString = new Array(5 * 1024 * 1024 + 1).join('a');
  store.put({ id: 5, username: largeString });
  const user = store.getAll();
  user.onsuccess = () => {
    console.log(user.result);
  };

  transaction.oncomplete = () => {
    db.close();
  };
};

open.onerror = () => {
  console.log('ERROR!');
};
*/
