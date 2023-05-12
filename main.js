const navTop = document.querySelector(".content");
const navSecondary = document.querySelector(".nav-secondary");

window.addEventListener("scroll", function () {
  navTop.classList.toggle("change-color-primary", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  navSecondary.classList.toggle("change-color-secondary", window.scrollY > 0);
});
