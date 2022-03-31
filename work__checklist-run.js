//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
let triggerView__teamSlider = document.querySelector('.check-list-into-view');
let triggersArray__checkBoxes = document.querySelectorAll('.checklist-trigger');
let timer__sliderIntoView;
let interval__checkboxRun;
let counter__checkBox = 0;
function handler__sliderIntoView() {
    clearTimeout(timer__sliderIntoView)
    timer__sliderIntoView = setTimeout(() => {
        let length__checkboxes = triggersArray__checkBoxes.length;
        interval__checkboxRun = setInterval(() => {
            if (counter__checkBox < length__checkboxes) {
                triggersArray__checkBoxes[counter__checkBox].click();
                counter__checkBox = counter__checkBox + 1;
                console.log('tick');
            } else {
                clearInterval(interval__checkboxRun);
            }
        }, 400);
        console.log(length__checkboxes);
        // triggersArray__checkBoxes.forEach(trigger__checkBox => {
        //     setTimeout(() => {
        //         trigger__checkBox.click();
        //     }, 250);
        // });
    }, 40);
}
let observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}
let observer = new MutationObserver(handler__sliderIntoView);
observer.observe(triggerView__teamSlider, observerOptions);