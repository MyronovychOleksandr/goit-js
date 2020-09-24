"use strict";
import gallery from "./gallery-items.js";

const ulGallery = document.querySelector(".js-gallery");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxButton = document.querySelector(".lightbox__button");
const lightbox = document.querySelector(".lightbox");

gallery.forEach((object) => {
  // Create element of list

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", object.preview);
  img.setAttribute("data-sourse", object.original);
  img.setAttribute("alt", object.description);

  const link = document.createElement("a");
  link.classList.add("gallery__link");

  const item = document.createElement("li");
  item.classList.add("gallery__item");

  link.append(img);
  item.append(link);

  ulGallery.append(item);
});

ulGallery.addEventListener("click", (event) => {
  console.log(event.target.dataset.sourse);
  const newSrc = event.target.dataset.sourse;
  lightbox.classList.add("is-open");
  lightboxImage.src = newSrc;
  window.addEventListener("keydown", (event) => {
    console.dir(event);
    console.dir(ulGallery);
    if (event.code === "ArrowRight") {
      ulGallery.childNodes[1];
    }
  });
});

lightboxButton.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    lightbox.classList.remove("is-open");
    lightboxImage.src = "";
  }
});
