import { forwardButton, backButton, createNavDots } from "./helperFunctions";


const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dot-container');
let slideCounter = 0;
const maxNumOfSlides = slides.length - 1;

// Shift all the slides to the left based on their index
slides.forEach( (slide, index) => {
    slide.style.transform = `translateX(${100 * index}%)`;
})

createNavDots(dotContainer, maxNumOfSlides);
let currentDot = document.querySelector(`#dot-${slideCounter}`);
currentDot.classList.toggle('current-dot');

forwardButton(slides, slideCounter, maxNumOfSlides);
backButton(slides, slideCounter, maxNumOfSlides);




