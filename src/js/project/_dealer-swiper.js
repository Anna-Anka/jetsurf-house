if (document.querySelector('.dealer__swiper')) {
    const dealerList = document.querySelector('.dealer__items');
    let originalCount = 0;
    if (dealerList) {
        originalCount = dealerList.children.length;
        if (originalCount === 3) {
            dealerList.innerHTML += dealerList.innerHTML;
        }
    }

    const swiper = new Swiper('.dealer__swiper', {
        loop: true,
        speed: 800,
        centeredSlides: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                if (index < originalCount) {
                    return `<span class="${className}"></span>`;
                }
                return '';
            }
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
        on: {
            init(swiper) {
                swiper.slideToLoop(1, 0, false);
                updateCustomBullets(swiper);
            },
            slideChange(swiper) {
                updateCustomBullets(swiper);
            }
        },
    });

    function updateCustomBullets(swiper) {
        const bullets = swiper.pagination.bullets;
        if (!bullets || !bullets.length) return;

        bullets.forEach(b => b.classList.remove('swiper-pagination-bullet-active'));

        const realIndex = swiper.realIndex % bullets.length;

        if (bullets[realIndex]) {
            bullets[realIndex].classList.add('swiper-pagination-bullet-active');
        }
    }

}
