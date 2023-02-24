const navOpen = document.querySelector('#triple-bar');
const navClose = document.querySelector('#cross');
const nav = document.querySelector('#nav');
const navLinks = Array.from(document.querySelectorAll('#links > li'));

const open = () => {
    nav.style.height = '22.3rem';
    navClose.style.display = 'block';
    navClose.classList.replace('hide', 'show');
    navOpen.style.display = 'none';
}

const close = () => {
    nav.style.height = '2.3rem';
    navOpen.style.display = 'block';
    navClose.classList.replace('show', 'hide');
    navClose.style.display = 'none';
}

navOpen.addEventListener('click', open);
navClose.addEventListener('click', close);
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navClose.classList.contains('show')) {
            close();
        }
    });
});