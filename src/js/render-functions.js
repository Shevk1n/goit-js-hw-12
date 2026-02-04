
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const loadMoreBtn = document.querySelector('.load-more');

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const imagesMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class= "gallery-item"><a href ="${largeImageURL}">
        <img src="${webformatURL}" alt = "${tags}" data-image = "${largeImageURL}"></a>
        <ul class = "item-dscr"><li class="stats"><h3>Likes</h3><p>${likes}</p></li>
        <li class="stats"><h3>Views</h3><p>${views}</p></li>
        <li class="stats"><h3>Comments</h3><p>${comments}</p></li>
        <li class="stats"><h3>Downloads</h3><p>${downloads}</p></li>
        </ul></li>`;
      }
    )
    .join(' ');
  gallery.insertAdjacentHTML('beforeend', imagesMarkup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}