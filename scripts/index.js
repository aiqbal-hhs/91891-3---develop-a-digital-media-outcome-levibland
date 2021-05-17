/**
 * @dev Constants
 */

// @dev the class to be added to the sidebar
const ACTIVE_SIDEBAR = "active";
const burger = document.querySelector(".MobileIcon");
const sidebarContainer = document.querySelector(".SidebarContainer");
const nav = document.querySelector(".Nav");
const heroButton = document.querySelector(".HeroButton");

/**
 * @dev State variables 
 */

// @dev Stores whether or not the mobile navigation is open, initialized as false
var isOpen = false;

/**
 * @dev Setter functions
 */

/**
 * @dev setIsOpen
 * @dev opens and closes the mobile navigation 
 */

const setIsOpen = () => {
    var overlay = document.querySelector(".SidebarContainer")

    // checks if isOpen is true or false and then
    // applies or removes a css class based upon that
    if (isOpen) {
        isOpen = !isOpen;

        overlay.classList.remove(ACTIVE_SIDEBAR);
    } else if (!isOpen) {
        isOpen = !isOpen;

        overlay.classList.add(ACTIVE_SIDEBAR);
    }
}

/**
 * @dev giveClass
 * @dev gives a specified class to a specified elements
 */

const giveclass = (el, className) => {
    el.classList.add(className);
}

/**
 * @dev removeClass
 * @dev removes a specified class from a specified element
 */
const removeClass = (el, className) => {
    el.classList.remove(className);
}

/**
 * @dev Getter functions
 */

/**
 * @dev offset
 * @dev returns the top and left positions of an element in pixels
 * @param el the element to check the position of
 * @return top the offset in pixels from the top of the document
 * @return left the offset in pixels from the left of the document
 */

const offset = (el) => {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

/**
 * @dev Event listeners
 */

burger.addEventListener('click', () => {
    setIsOpen();
});

sidebarContainer.addEventListener('click', () => {
    setIsOpen();
});

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        nav.classList.add("dark");
    } else {
        nav.classList.remove('dark');
    }
});

heroButton.addEventListener('mouseover', () => {
    heroButton.innerHTML = 'Courses &nbsp<i class="fas fa-arrow-right"></i>';
});

heroButton.addEventListener('mouseleave', () => {
    heroButton.innerHTML = 'Courses &nbsp<i class="fas fa-chevron-right"></i>';
});

/**
 * @dev onload functions
 */

window.onload = () => {
    let year = new Date().getFullYear();
    websiteRights.innerHTML = "Feng Shui © " + year + " All Rights Reserved. | Website by Levi Bland.";
}
