const getSavedCollection = () => {
  const savedCollection = localStorage.getItem('bookCollection');
  return savedCollection ? JSON.parse(savedCollection) : [];
};

const saveCollection = (collection) => {
  localStorage.setItem('bookCollection', JSON.stringify(collection));
};

export { saveCollection };
export default getSavedCollection;
