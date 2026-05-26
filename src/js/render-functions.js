import SLBox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

function createGalleryItem({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `
    <li class="gallery-item">
      <a href="${largeImageURL}" data-lightbox="gallery">
        <img src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="details">
        <p><strong>Likes:</strong> ${likes}</p>
        <p><strong>Views:</strong> ${views}</p>
        <p><strong>Comments:</strong> ${comments}</p>
        <p><strong>Downloads:</strong> ${downloads}</p>
      </div>
    </li>
  `;
}

export function createGallery(items) {
  
  const markup = items
    .map(createGalleryItem)
    .join("");
  gallery.innerHTML = markup;
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("hidden");
}

export function hideLoader() {
  loader.classList.add("hidden");
}