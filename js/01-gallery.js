import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryONe = galleryItems
  .map(
    (pictures) =>
      `<li class="gallery__item">
  <a class="gallery__link" href=${pictures.original}>
    <img
      class="gallery__image"
      src=${pictures.preview}
      data-source=${pictures.original}
      alt=${pictures.description}
    />
  </a>
</li>`
  )
  .join("");
gallery.innerHTML = galleryONe;
gallery.addEventListener("click", (a) => {
  a.preventDefault();
  if (a.target.nodeName !== "IMG") {
    return;
  }
  const selectedImage = a.target.getAttribute("data-source");
  const instance = basicLightbox.create(`<img src="${selectedImage}"
      width = "800" height = "600">`);
  instance.show();
  gallery.addEventListener("keydown", (a) => {
    if (a.key === "Escape") {
      instance.close();
    }
  });
});
