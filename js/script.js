


// swiper js
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });