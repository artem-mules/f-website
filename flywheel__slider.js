let targetNode = document.querySelector('.value-slider');
let timeout__sliderHandler;


function handler__sliderChanging() {
    clearTimeout(timeout__sliderHandler);
    timeout__sliderHandler = setTimeout(() => {
        let elementsArray__slides = document.querySelectorAll('.w-slide');
        // let el__activeSlide = document.querySelector('.');

        elementsArray__slides.forEach((el__slide, id__slide) => {
            if (el__slide.getAttribute('aria-hidden') == null) {
                let trigger__o = el__slide.querySelector('.trigger-o');
                trigger__o.click();
            } else {
                let trigger__c = el__slide.querySelector('.trigger-c');
                trigger__c.click();
            }
        });
    }, 50);
}



let observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}
let observer = new MutationObserver(handler__sliderChanging);
observer.observe(targetNode, observerOptions);
