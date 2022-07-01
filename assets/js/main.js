/*Toggle Menu*/
const menuBtn = document.querySelector('.mobileMenuBtn');
const mobileMenu = document.querySelector('.slider-navigation');
const closeIcon = document.querySelector('.closeIcon');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle("show");
        if (closeIcon) {
            closeIcon.addEventListener('click', function () {
                mobileMenu.classList.remove("show");
            })
        }
    })
}
/* icon placement */
const hasChildren = document.querySelectorAll('.has-children');

if (hasChildren) {
    let array = ['arrow', 'fa-solid', 'fa-chevron-down'];
    iconPlaceMent(hasChildren, array);
}
const nestedElement = document.querySelectorAll(".has-nested-submenu");
if (nestedElement) {
    let array = ['arrow', 'fa-solid', 'fa-chevron-right'];
    iconPlaceMent(nestedElement, array);
}

function iconPlaceMent(element, array) {
    let elementLength = element.length;
    if (elementLength > 0) {
        for (let i = 0; i < elementLength; i++) {
            let span = document.createElement('span');
            span.classList.add(...array);
            element[i].appendChild(span);
        }
    }
}

/* Aos */
AOS.init();

