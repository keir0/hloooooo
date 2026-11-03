const input =
  document.querySelector("#nameInput");

const preview =
  document.querySelector("#preview");

input.addEventListener("input", (event) => {
  preview.textContent =
    event.target.value;
});
