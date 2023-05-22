import { slideForward, slideBack, createNavDots, changeDot } from "./helperFunctions";
import './styles.css'

sessionStorage.setItem('slideCounter', 0)
const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dot-container');
let slideCounter = 0;
const maxNumOfSlides = slides.length - 1;
const forwardButton = document.querySelector('.forward-arrow');
const backButton = document.querySelector('.back-arrow');

// Shift all the slides to the left based on their index
slides.forEach( (slide, index) => {
    slide.style.transform = `translateX(${100 * index}%)`;
})


createNavDots(dotContainer, maxNumOfSlides);
const navDots = document.querySelectorAll('.dot');
navDots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        let currentSlideIndex = parseInt(sessionStorage.getItem('slideCounter'));
        if (dotIndex > currentSlideIndex) {  
            changeDot(currentSlideIndex, dotIndex);
            const numOfJumps = dotIndex - currentSlideIndex;
            for (let i = 0; i < numOfJumps; i++) {
                currentSlideIndex = slideForward(slides, maxNumOfSlides);
                sessionStorage.setItem('slideCounter', currentSlideIndex);
            }
            
            
               
        }else if (dotIndex < currentSlideIndex) {
            changeDot(currentSlideIndex, dotIndex);
            for (let i = currentSlideIndex; i > dotIndex; i--) {
                currentSlideIndex = slideBack(slides, maxNumOfSlides);
                sessionStorage.setItem('slideCounter', currentSlideIndex);
            }
        }
    })
})


let currentDot = document.querySelector(`#dot-${slideCounter}`);
currentDot.classList.toggle('current-dot');


forwardButton.addEventListener('click', () => {
    let currentSlideIndex = parseInt(sessionStorage.getItem('slideCounter'));
    let newSlideIndex = slideForward(slides, maxNumOfSlides);
    changeDot(currentSlideIndex, newSlideIndex);
    sessionStorage.setItem('slideCounter', newSlideIndex);
})

backButton.addEventListener('click', () => {
    let currentSlideIndex = parseInt(sessionStorage.getItem('slideCounter'));
    let newSlideIndex = slideBack(slides, maxNumOfSlides);
    changeDot(currentSlideIndex, newSlideIndex);
    sessionStorage.setItem('slideCounter', newSlideIndex); 
})





