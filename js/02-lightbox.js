import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryONe = galleryItems
  .map((pictures) => {
    return ` <li class="gallery__item">
    <a class="gallery__link" href=${pictures.original}>
      <img
        class="gallery__image"
        src=${pictures.preview}
        alt=${pictures.description}
      />
    </a>
  </li>`;
  })
  .join("");
const galleryImg = document.querySelector(".gallery__image");
gallery.innerHTML = galleryONe;
new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
