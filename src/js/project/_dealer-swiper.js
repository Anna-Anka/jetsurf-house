if (document.querySelector('.dealer__swiper')) {
    new Swiper('.dealer__swiper', {
        loop: true,
        speed: 800,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            992: {
                spaceBetween: 40,
                slidesPerGroup: 1,
                slidesPerView: 3,
                centeredSlides: true,
            },

            569: {
                slidesPerGroup: 1,
                slidesPerView: 2,
                spaceBetween: 20,
            },

            0: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },
    });
}
