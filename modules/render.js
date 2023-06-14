const renderBookList = (collection) => {
  const bookListElement = document.getElementById('bookListItems');
  bookListElement.innerHTML = '';

  collection.forEach((book, index) => {
    const li = document.createElement('li');
    li.textContent = `${book.title} - ${book.author}`;
    li.className = 'single-book';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    const removeBook = () => {
      collection.splice(index, 1);
      import('./storage.js').then((module) => {
        module.saveCollection(collection);
      });
      renderBookList(collection);
    };

    removeButton.addEventListener('click', removeBook);

    li.appendChild(removeButton);
    bookListElement.appendChild(li);
  });
};

export default renderBookList;
