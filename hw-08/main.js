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

ulGallery.addEventListener("click", ulGalleryOpenModalHandler);
lightbox.addEventListener('click', lightboxCloseModalHandler)
lightboxButton.addEventListener("click", closeModal)
// window.addEventListener("keydown", escapeCloseModalHandler);

function ulGalleryOpenModalHandler(event) {
  if(event.target.nodeName !== "IMG") {
    return;
}
  openModal(event);
  window.addEventListener("keydown", escapeCloseModalHandler);
}

function closeModal() {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
  window.removeEventListener("keydown", escapeCloseModalHandler);
}

function openModal(event) {
  const newSrc = event.target.dataset.sourse;
  lightbox.classList.add("is-open");
  lightboxImage.src = newSrc;
}

function escapeCloseModalHandler(event) {
  if (event.code === "Escape") {
    closeModal()
  }
}

function lightboxCloseModalHandler(event) {
  if(event.target.nodeName !== "IMG") {
    closeModal()
  }
}

