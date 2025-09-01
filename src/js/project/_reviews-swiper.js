if (document.querySelector('.reviews-about__swiper')) {
    new Swiper('.reviews-about__swiper', {
        slidesPerGroup: 1,
        loop: true,

        navigation: {
            nextEl: '.reviews-about__arrow--next',
            prevEl: '.reviews-about__arrow',
        },

        scrollbar: {
            el: '.reviews-about__scrollbar',
            draggable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            560: {
                slidesPerView: 1.5,
                spaceBetween: 50,
            },
            992: {
                slidesPerView: 1.8,
            },
            1200: {
                slidesPerView: 2.5,
                spaceBetween: 60,
            }
        },
    });
}







