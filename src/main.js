

import fetchData from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements["search-text"].value.trim();

  console.log('Search query:', query);

  if (!query) {
    console.log('Please enter a search query.');
    return;
  }
  
  showLoader();

  fetchData(query)
    .then(data => {
    if (data.hits.length === 0) {
      console.log('Sorry, there are no images matching your search query. Please try again!');
      return;
    }
    console.log(data);
    createGallery(data.hits);
    })
    .catch(error => {
    console.error('Error fetching images:', error);
    })
    .finally(() => {
      hideLoader();
    });
});