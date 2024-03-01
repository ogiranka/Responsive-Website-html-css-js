const menu = document.querySelector('#mobile-manu');
const menuLinks = document.querySelector('.navbar_manu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});