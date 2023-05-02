const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav ul");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
});