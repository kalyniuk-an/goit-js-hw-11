

import fetchData from './js/pixabay-api.js';
// // import moduleName from './js/render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements["search-text"].value.trim();

  console.log('Search query:', query);

  fetchData(query).then(images => {
    console.log(images);
  }).catch(error => {
    console.error('Error fetching images:', error);
  });
});