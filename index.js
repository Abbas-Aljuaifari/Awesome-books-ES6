import getSavedCollection from './modules/storage.js';
import renderBookList from './modules/render.js';
import addBook from './modules/addBook.js';
import setupNavigation from './modules/navigation.js';
import { DateTime } from './modules/luxon.js';

const bookCollection = getSavedCollection();

document.getElementById('addBookForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;

  addBook(title, author, bookCollection);

  titleInput.value = '';
  authorInput.value = '';
});

setupNavigation();

renderBookList(bookCollection);

function getCurrentDate() {
  return DateTime.now().toFormat('DDDD');
}

function displayCurrentDate() {
  const currentDateElement = document.createElement('p');
  currentDateElement.textContent = getCurrentDate();
  document.body.insertBefore(
    currentDateElement,
    document.querySelector('main'),
  );
}

displayCurrentDate();
