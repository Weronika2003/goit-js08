// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const img = document.querySelector('.gallery');

const showImg = galleryItems
  .map(
    galleryItems => `<li class="gallery__item"><a class="gallery__link" href="${galleryItems.original}">
  <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" title="${galleryItems.description}"/>
</a></li>`
  )
  .join('');
img.innerHTML = showImg;
let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
