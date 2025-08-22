if (document.querySelector('.dealer__swiper')) {
    new Swiper('.dealer__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 3,
        centeredSlides: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        // breakpoints: {
        //     1400: {
        //         spaceBetween: 35,
        //         slidesPerView: 1.5,
        //     },

        //     1200: {
        //         spaceBetween: 25,
        //         slidesPerView: 1.5,
        //     },
        // },
    });
}
