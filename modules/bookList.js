import { getCollection, removeBook } from './bookCollection.js';
import { DateTime } from './luxon.js';

const renderBookList = () => {
  const bookListElement = document.getElementById('bookListItems');
  bookListElement.innerHTML = '';

  const bookCollection = getCollection();

  bookCollection.forEach((book, index) => {
    const li = document.createElement('li');
    li.textContent = `${book.title} - ${book.author}`;
    li.className = 'single-book';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.addEventListener('click', () => {
      removeBook(index);
      renderBookList();
    });

    li.appendChild(removeButton);
    bookListElement.appendChild(li);
  });

  const currentTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  const dateTimeElement = document.getElementById('DateTime');
  dateTimeElement.textContent = `Current Date and Time: ${currentTime}`;
};
export default renderBookList;