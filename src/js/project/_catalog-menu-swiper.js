if (document.querySelector('.home-catalog__swiper')) {
    new Swiper('.home-catalog__swiper', {
        slidesPerGroup: 1,
        slidesPerView: 'auto',

        breakpoints: {
            768: {
                spaceBetween: 20,
            },

            0: {
                spaceBetween: 10,
            },
        },
    });
}
