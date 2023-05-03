const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav2");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  header.classList.toggle("open");
});