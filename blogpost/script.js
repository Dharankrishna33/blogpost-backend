// This code is optional and can be used for interactions and dynamic effects

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const main = document.querySelector('main');

function toggleMenu() {
  nav.classList.toggle('show-menu');
}

header.addEventListener('click', toggleMenu);
main.addEventListener('click', function() {
  if (nav.classList.contains('show-menu')) {
    nav.classList.remove('show-menu');
  }
});
