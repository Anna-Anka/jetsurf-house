if (document.querySelector('.reviews-about__swiper')) {
  new Swiper('.reviews-about__swiper', {
    slidesPerView: "auto",
    loop: true,




    pagination: {
      el: '.reviews-about__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews-about__next',
      prevEl: '.reviews-about__prev',
    },
  });

}




