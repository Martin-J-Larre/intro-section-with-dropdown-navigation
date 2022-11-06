const hamburger = document.querySelector('.nav__hamburger');
const navOverlay = document.querySelector('.nav__overlay');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('nav__hamburger--open');
    navOverlay.classList.toggle('nav__overlay--open');
});

navOverlay.addEventListener('click', (e) => {
    e.preventDefault();
    const currentElement = e.target;

    if (subMenu(currentElement, 'nav__item--parent')) {

        const dropDown = currentElement.parentElement.children[1];
        
        if (window.innerWidth < 768) {
            let height = dropDown.clientHeight == 0 ? dropDown.scrollHeight : 0;
            dropDown.style.height = `${height}px`
        } else {
            
        }
    }
});

const subMenu = (element, nameClass) => { 
    return element.classList.value.includes(nameClass);
}