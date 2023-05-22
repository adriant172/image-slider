

export function slideForward(slides,maxNumOfSlides) {
    let currentSlideIndex = parseInt(sessionStorage.getItem('slideCounter'));
    let newSlideIndex;
    if (currentSlideIndex == maxNumOfSlides) {
        newSlideIndex = 0;
    }
    else {
        newSlideIndex = currentSlideIndex + 1;
    }
    
    slides.forEach( (slide, index) => {
        slide.style.transform = `translateX(${100 * (index - newSlideIndex)}%)`;
    })
    
    return newSlideIndex    
}

export function slideBack(slides, maxNumOfSlides) {
    let currentSlideIndex = parseInt(sessionStorage.getItem('slideCounter'));
    let newSlideIndex;
    if (currentSlideIndex == 0) {
        newSlideIndex = maxNumOfSlides;
    }
    else {
        newSlideIndex = currentSlideIndex - 1;
    }
    
    slides.forEach( (slide, index) => {
        slide.style.transform = `translateX(${100 * (index - newSlideIndex)}%)`;
    })
    return newSlideIndex
}

export function changeDot(currentDotIndex, desiredDotIndex) {
    let currentDot = document.querySelector(`#dot-${currentDotIndex}`);
    let newDot = document.querySelector(`#dot-${desiredDotIndex}`);

    currentDot.classList.toggle('current-dot');
    newDot.classList.toggle('current-dot')
}

export function createNavDots(dotContainer, maxNumOfSlides){
    for (let i = 0; i <= maxNumOfSlides; i++) {
        const newDot = document.createElement('div');
        newDot.classList.add('dot');
        newDot.classList.add(`image-${i}`);
        newDot.id = `dot-${i}`;
        dotContainer.appendChild(newDot)
    }
}

 function linkNavDot(dot, dotIndex){
    dot.addEventListener('click', () => {
        if (dotIndex > window['slideCounter']) {
            window['slideCounter'] = dotIndex;
            forwardButton()
        }
    })
}