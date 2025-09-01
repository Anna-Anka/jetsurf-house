if (document.querySelector('.reviews-about__swiper')) {
  new Swiper('.reviews-about__swiper', {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    slidesOffsetBefore: 255,
    grabCursor: true,

    navigation: {
      nextEl: '.reviews-about__arrow--next',
      prevEl: '.reviews-about__arrow',
    },


    scrollbar: {
      el: '.reviews-about__scrollbar',
      draggable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesOffsetBefore: 0,
        centeredSlides: true,
      },
      560: {
        slidesPerView: "auto",
        slidesOffsetBefore: 50,
      },
      993: {
        slidesPerView: "auto",
        slidesOffsetBefore: 220,
      },
      1440: {
        slidesPerView: "auto",
        slidesOffsetBefore: 255,
      }
    },
  });
}







