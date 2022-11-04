const burger = document.querySelector('.nav__burger');
const dropdown = document.querySelector('.nav__menu--dropdown');

burger.addEventListener('click',() => burger.classList.toggle('nav__burger--open'));
dropdown.addEventListener('click',() => dropdown.classList.toggle('dropdown'));
