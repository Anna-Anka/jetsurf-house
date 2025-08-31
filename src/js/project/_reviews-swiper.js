if (document.querySelector('.reviews-about__swiper')) {
  new Swiper('.reviews-about__swiper', {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    slidesOffsetBefore: 255,

    pagination: {
      el: '.reviews-about__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews-about__arrow--next',
      prevEl: '.reviews-about__arrow',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesOffsetBefore: 0,
        centeredSlides: true,
        pagination: {
          el: ".reviews-about__pagination",
          type: 'progressbar',
        },
      },
      560: {
        slidesPerView: "auto",
        slidesOffsetBefore: 50,
        pagination: {
          el: ".reviews-about__pagination",
          type: 'progressbar',
        },

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






