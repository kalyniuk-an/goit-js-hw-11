

import fetchData from './js/pixabay-api.js';
// // import moduleName from './js/render-functions.js';


fetchData('nature').then(images => {
  console.log(images);
}).catch(error => {
  console.error('Error fetching images:', error);
});
