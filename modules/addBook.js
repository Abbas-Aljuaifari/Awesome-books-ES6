import { addBook } from './bookCollection.js';
import renderBookList from './bookList.js';

const handleFormSubmit = (event) => {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;

  addBook(title, author);
  renderBookList();

  titleInput.value = '';
  authorInput.value = '';
};
export default handleFormSubmit;