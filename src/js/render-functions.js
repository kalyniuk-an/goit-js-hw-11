import SLBox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

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

function clearGallery() {
  gallery.innerHTML = "";
}

function showLoader() {
  // Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає
}

function hideLoader() {
  // Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає
}