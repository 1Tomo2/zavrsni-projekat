let searchIcon = document.querySelector("#searchIcon");
let searchInput = document.querySelector("#searchInput");
let body = document.querySelector("body");
let x = document.querySelector("#x");

const searchAnimation = function () {
  searchInput.style.animationName = "search";
  searchInput.style.animationDuration = "1s";
  searchInput.style.animationFillMode = "forwards";
  searchInput.style.display = "block";
  searchIcon.style.display = "none";
  x.style.display = "block";
};

const secondSearchAnimation = function () {
  searchIcon.style.display = "block";
  x.style.display = "none";
  searchInput.style.display = "none";
};

searchIcon.addEventListener("click", searchAnimation);

x.addEventListener("click", secondSearchAnimation);
