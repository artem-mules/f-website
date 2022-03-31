let appenderArray__ceoInfo = document.querySelectorAll('.player-control-wrapper--about-page--append');

appenderArray__ceoInfo.forEach(el__appender => {
    let clonable__ceoInfo = document.querySelector('#clonable__ceo-info').cloneNode(true);
    el__appender.append(clonable__ceoInfo);
});