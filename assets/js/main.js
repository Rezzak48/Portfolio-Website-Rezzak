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

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SCROLL UP ====================*/
function scrollUp() {
  const scrl = document.getElementById("scroll-up");
  // When the scroll is greater than 600 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 600) scrl.classList.add("scroll-up-show");
  else scrl.classList.remove("scroll-up-show");
}
window.addEventListener("scroll", scrollUp);
