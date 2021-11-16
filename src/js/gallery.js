import { Console } from 'console';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './app';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

// const createMarkup = images =>
//     images
//         .map(({ preview, original, description }) => {
//             return `
//     <a href="${original}">
//         <img src="${preview}" alt="${description}" title="${description}" />
//     </a>`;
//         })
//         .join('');
// const markup = createMarkup(galleryItems);
// const createMarkup = ({ original, preview, description }) => {
//     return `<a href=${original}>
//   <img  src=${preview} alt=${description} />
// </a>
// `;
// };


const createMarkup = ({ original, preview, description }) => {
    return `<div class="gallery__item"><a href=${original} class="gallery__link">
  <img class="gallery__image" src=${preview} alt=${description} />
</a></div>
`;
};

// const markup = galleryItems.map((item) => createMarkup(item)).join('');

// const renderMarkup = (strings) => {
//     galleryRef.insertAdjacentHTML('beforeend', strings);
// };


const markup = galleryItems.map((item) => createMarkup(item)).join('');

const renderMarkup = (strings) => {
    galleryRef.insertAdjacentHTML('beforeend', strings);
};

renderMarkup(markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 500,
});

// const onClick = (e) => {
//     e.preventDefault();
//     if (e.target.nodeName !== 'IMG') {
//         return;
//     } else {
//         lightbox.open(e.target);
//     }
// };
// galleryRef.addEventListener('click', onClick);


console.log(SimpleLightbox)


