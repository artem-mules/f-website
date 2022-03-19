elArray__slides = document.querySelectorAll('.cl-i__team.w-dyn-item');
appender__slider = document.querySelector('.cl__team');
let counter__cloningCount = 0;
while (counter__cloningCount < 40) {
    elArray__slides.forEach((el__slide, id__slide) => {
        appender__slider.append(el__slide.cloneNode(true));
    });
    counter__cloningCount = counter__cloningCount + 1;
}


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
let triggerView__teamSlider = document.querySelector('.view-trigger--team-slider');
let triggersArray__teamSlider = document.querySelectorAll('.iso-card-trigger');
let timer__sliderIntoView;
function handler__sliderIntoView() {
    clearTimeout(timer__sliderIntoView)
    timer__sliderIntoView = setTimeout(() => {
        triggersArray__teamSlider.forEach(trigger__teamSlider => {
            trigger__teamSlider.click();
        });
    }, 40);
}
let observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}
let observer = new MutationObserver(handler__sliderIntoView);
observer.observe(triggerView__teamSlider, observerOptions);