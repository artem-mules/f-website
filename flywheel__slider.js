window.onload = function() {
    let targetNode__valueSlider = document.querySelector('.value-slider');
    let timeout__sliderHandler;


    function handler__sliderChanging() {
        clearTimeout(timeout__sliderHandler);
        timeout__sliderHandler = setTimeout(() => {
            let elementsArray__slides = document.querySelectorAll('.value-slider__slide.w-slide');

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



    let observerOptions__valueSlider = {
        childList: true,
        attributes: true,
        subtree: true
    }
    let observer__valueSlider = new MutationObserver(handler__sliderChanging);
    observer__valueSlider.observe(targetNode__valueSlider, observerOptions__valueSlider);
}