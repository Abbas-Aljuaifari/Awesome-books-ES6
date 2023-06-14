let bookCollection = [];

const getSavedCollection = () => {
  const savedCollection = localStorage.getItem('bookCollection');
  return savedCollection ? JSON.parse(savedCollection) : [];
};

const saveCollection = () => {
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
};

export const initializeCollection = () => {
  bookCollection = getSavedCollection();
};

export const getCollection = () => bookCollection;

export const removeBook = (index) => {
  bookCollection.splice(index, 1);
  saveCollection();
};

export const addBook = (title, author) => {
  const newBook = { title, author };
  bookCollection.push(newBook);
  saveCollection();
};
