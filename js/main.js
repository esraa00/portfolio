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

// start skills
const skillCategories = document.querySelectorAll(".skill__category");
const skillsHeaders = document.querySelectorAll(".skill-category__header");
function toggleSkills() {
  let clickedCategory = this.parentNode;
  if (clickedCategory.classList.contains("skill__open")) {
    clickedCategory.classList.remove("skill__open");
  } else {
    clickedCategory.classList.add("skill__open");
  }
}

skillsHeaders.forEach((skillHeader) => {
  skillHeader.addEventListener("click", toggleSkills);
});
// end skills

// start qualifications
const tabs = document.querySelectorAll("[data-target]");
const tabsContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
// end qualifications
// start services
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloseBtns = document.querySelectorAll(".services__modal-icon-close");

const activateModal = (modalIndex) => {
  modalViews[modalIndex].classList.add("modal__active");
};

const deactivateModal = (modalIndex) => {
  modalViews[modalIndex].classList.remove("modal__active");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    activateModal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtns, i) => {
  modalCloseBtns.addEventListener("click", () => {
    deactivateModal(i);
  });
});

// end services
