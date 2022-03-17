elArray__slides = document.querySelectorAll('.cl-i__team.w-dyn-item');
appender__slider = document.querySelector('.cl__team');

let counter__cloningCount = 0;

while (counter__cloningCount < 20) {
    elArray__slides.forEach((el__slide, id__slide) => {
        appender__slider.append(el__slide.cloneNode(true));
    });
    counter__cloningCount = counter__cloningCount + 1;
}