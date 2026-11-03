const photo =
  document.querySelector("#photo");

const button =
  document.querySelector("#nextBtn");

button.addEventListener("click", () => {
  photo.src = "image/shadow2.jpg";
  photo.alt = "shadow2";
});
