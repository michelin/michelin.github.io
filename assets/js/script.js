/**
 * Back to top button management
 */
let backToTopButton = document.getElementById('backToTopButton')
backToTopButton.addEventListener('click', backToTopFunction);
// When the user scrolls down over the viewport height from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (
        document.body.scrollHeight > 3000 &&
        (document.body.scrollTop > window.innerHeight ||
            document.documentElement.scrollTop > window.innerHeight)
    ) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function backToTopFunction() {
    document.body.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    document.documentElement.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

/**
 * Navigation menu management
 */
let closeButton = document.getElementsByClassName('close').item(0)
closeButton.addEventListener('click', closeFunction);

// remove class 'opened' to header and remove class 'no-scroll' to body and html
function closeFunction() {
    document.getElementsByTagName('header')[0].classList.remove('opened');
    document.getElementsByTagName('body')[0].classList.remove('no-scroll');
    document.getElementsByTagName('html')[0].classList.remove('no-scroll');
}

// on click on link navigation__link call closeFunction
let links = document.getElementsByClassName('navigation__link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closeFunction);
}

let openButton = document.getElementsByClassName('burger').item(0)
openButton.addEventListener('click', openFunction);

// Add class 'opened' to header and 'no-scroll' to body and html
function openFunction() {
    document.getElementsByTagName('header')[0].classList.add('opened');
    document.getElementsByTagName('body')[0].classList.add('no-scroll');
    document.getElementsByTagName('html')[0].classList.add('no-scroll');

    // Hide backToTopButton when the menu is opened
    let backToTopButton = document.getElementById('backToTopButton')
    backToTopButton.style.display = "none";
}