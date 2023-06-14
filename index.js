import { initializeCollection } from './modules/bookCollection.js';
import renderBookList from './modules/bookList.js';
import handleFormSubmit from './modules/addBook.js';
import handleNavigationClick from './modules/navigation.js';

document
  .getElementById('addBookForm')
  .addEventListener('submit', handleFormSubmit);

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    handleNavigationClick(event, link);
  });
});

initializeCollection();
renderBookList();
