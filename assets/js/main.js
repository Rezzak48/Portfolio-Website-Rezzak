/*============ Menu ============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== HIDE SHOW =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ===== REMOVE MOBILE MENU ON EACH CLICK ===== */
const navLink = document.querySelectorAll(".nav-link");
// const navMenu = document.getElementById("nav-menu");

// doing action for any item got clicked!
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

