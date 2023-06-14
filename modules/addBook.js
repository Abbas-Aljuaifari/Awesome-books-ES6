export function addBook(title, author, collection) {
    const newBook = { title, author };
    collection.push(newBook);
    import('./storage.js').then((module) => {
      module.saveCollection(collection);
    });
    import('./render.js').then((module) => {
      module.renderBookList(collection);
    });
  }
  