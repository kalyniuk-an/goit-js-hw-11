import SLBox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

function createGallery(items) {
  
  const markup = items
    .map(
      ({ webformatURL, largeImageURL, tags }) => `
        <div class="gallery-item">
          <a href="${largeImageURL}" data-lightbox="gallery">
            <img src="${webformatURL}" alt="${tags}" />
          </a>
        </div>
      `
    )
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