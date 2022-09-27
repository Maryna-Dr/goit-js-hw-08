// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const markupGalleryItem = galleryItems
  .map(
    it =>
      `<a class="gallery__link" href="${it.original}">
        <img
        class="gallery__image"
        src="${it.preview}"
        alt="${it.description}"
        />
    </a>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markupGalleryItem);

const titleImage = {
  captionsData: 'alt',
  captionDelay: 250,
};

new SimpleLightbox('.gallery__link', titleImage);
