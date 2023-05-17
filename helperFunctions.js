
export function forwardButton(slides, slideCounter, maxNumOfSlides) {
    const forwardButton = document.querySelector('.forward-arrow');
    forwardButton.addEventListener('click', () => {
        let currentDot = document.querySelector(`#dot-${slideCounter}`)
        currentDot.classList.toggle('current-dot')
        if (slideCounter == maxNumOfSlides) {
            slideCounter = 0;
        }
        else {
            slideCounter++;
        }
        let newDot = document.querySelector(`#dot-${slideCounter}`)
        newDot.classList.toggle('current-dot')
        slides.forEach( (slide, index) => {
            slide.style.transform = `translateX(${100 * (index - slideCounter)}%)`;
        })
    
    })
}

export function backButton(slides, slideCounter, maxNumOfSlides) {
    const backButton = document.querySelector('.back-arrow');
    backButton.addEventListener('click', () => {
        let currentDot = document.querySelector(`#dot-${slideCounter}`)
        currentDot.classList.toggle('current-dot')
        if (slideCounter == 0) {
            slideCounter = maxNumOfSlides;
        }
        else {
            slideCounter--;
        }
        let newDot = document.querySelector(`#dot-${slideCounter}`)
        newDot.classList.toggle('current-dot')
        slides.forEach( (slide, index) => {
            slide.style.transform = `translateX(${100 * (index - slideCounter)}%)`;
        })  
    })
}

export function createNavDots(dotContainer, maxNumOfSlides){
    for (let i = 0; i <= maxNumOfSlides; i++) {
        const newDot = document.createElement('div');
        newDot.classList.add('dot');
        newDot.id = `dot-${i}`
        dotContainer.appendChild(newDot)
    }
}
