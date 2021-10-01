// <!-- Initialize Swiper -->
let testimonialSwiper = new Swiper(".testimonial-container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPreView: 2,
    },
  },
});
