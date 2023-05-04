import { galleryItems } from "./gallery-items.js";
// Change code below this line
const instance = basicLightbox.create(`
    <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg" width="800" height="600">
`);

instance.show();
console.log(galleryItems);
