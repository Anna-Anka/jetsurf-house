(function() {
    const catalog = document.querySelector('.home-catalog__items')

    if (catalog) {
        mixitup(catalog, {
            load: {
                filter: '.category-electric-surfboards'
            }
        });
    }
})()
