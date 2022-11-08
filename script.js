const hamburger = document.querySelector('.nav__hamburger');
const navOverlay = document.querySelector('.nav__overlay');
const arrow = document.querySelector('.nav__item--arrow');
currentDropdown = navOverlay;

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
            if (!subMenu(dropDown, 'nav__dropdown--open')) {
                closeDropdown(currentDropdown)
                
            }
            dropDown.classList.toggle('nav__dropdown--open');
            currentDropdown = dropDown;
        }
    }
});

const subMenu = (element, nameClass) => { 
    return element.classList.value.includes(nameClass);
}
const closeDropdown = (currentDropdown) => { 
    if (subMenu(currentDropdown, 'nav__dropdown--open')) {
        currentDropdown.classList.remove('nav__dropdown--open')        
    }
}

window.addEventListener('resize', () => {
    closeDropdown(currentDropdown);
    if (window.innerWidth > 768) {
        const navMenuDropdown = document.querySelectorAll('.nav__menu--dropdown');

        navMenuDropdown.forEach(element => {
            element.style.height = '';
        })
    }
})