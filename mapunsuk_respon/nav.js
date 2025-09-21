const burger = document.querySelector('.hamburger');
const bar = document.querySelector('.content1'); // บรรทัดของ navbar

if (burger && bar) {
    burger.addEventListener('click', () => {
        const open = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!open));
        bar.classList.toggle('menu-open', !open);
    });
}