export function getSavedCollection() {
    const savedCollection = localStorage.getItem('bookCollection');
    return savedCollection ? JSON.parse(savedCollection) : [];
  }
  
  export function saveCollection(collection) {
    localStorage.setItem('bookCollection', JSON.stringify(collection));
  }
  