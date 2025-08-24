import { disableScroll, enableScroll } from '../utils/index.js';

(function() {
    const burgerButton = document.querySelector('[data-burger-button]');
    const menu = document.querySelector('[data-menu]');
    const menuLinks = document.querySelectorAll('[data-menu-link]');
    const overlay = document.querySelector('[data-menu-overlay]');

    if (!burgerButton || !menu || !menuLinks || !overlay) return;

    const checkClass = () => {
        if (burgerButton.classList.contains('burger-button--active')) {
            burgerButton.setAttribute('aria-expanded', 'true');
            burgerButton.setAttribute('aria-label', 'закрыть меню');
            burgerButton.focus();
            disableScroll();
        } else {
            burgerButton.setAttribute('aria-expanded', 'false');
            burgerButton.setAttribute('aria-label', 'открыть меню');
            enableScroll();
        }
    };

    const hideBurger = () => {
        burgerButton.classList.remove('burger-button--active');
        menu.classList.remove('burger-menu--active');
        overlay.classList.remove('_overlay--active');
    }

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('burger-button--active');
        menu.classList.toggle('burger-menu--active');
        overlay.classList.toggle('_overlay--active');
        checkClass();
    });

    overlay.addEventListener('click', () => {
        hideBurger();
        checkClass();
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            hideBurger();
            enableScroll();
        });
    });
})()
