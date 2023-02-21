const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    if (!navMenu.classList.contains("show-menu"))
      navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    if (navMenu.classList.contains("show-menu"))
      navMenu.classList.remove("show-menu");
  });
}

const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  if (navMenu.classList.contains("show-menu"))
    navMenu.classList.remove("show-menu");
}
navLinks.forEach((link) => link.addEventListener("click", linkAction));
