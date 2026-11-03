const title =
  document.querySelector("#title");

const button =
  document.querySelector("#changeBtn");

button.addEventListener("click", () => {
  title.textContent =
    "Title Changed with JavaScript";
});
