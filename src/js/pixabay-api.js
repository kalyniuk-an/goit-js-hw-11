function getImagesByQuery(query) {
  const API_KEY = 'YOUR_API_KEY';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`;
  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}