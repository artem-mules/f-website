// console.log('test');


// document.addEventListener('touchstart', handleTouchStart, false);
// document.addEventListener('touchmove', handleTouchMove, false);

// var xDown = null;
// var yDown = null;

// function getTouches(evt) {
//     return evt.touches ||             // browser API
//         evt.originalEvent.touches; // jQuery
// }

// function handleTouchStart(evt) {
//     const firstTouch = getTouches(evt)[0];
//     xDown = firstTouch.clientX;
//     yDown = firstTouch.clientY;
// };

// function handleTouchMove(evt) {
//     if (!xDown || !yDown) {
//         return;
//     }

//     var xUp = evt.touches[0].clientX;
//     var yUp = evt.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;

//     if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
//         if (xDiff > 0) {
//             /* right swipe */
//         } else {
//             /* left swipe */
//         }
//     } else {
//         if (yDiff > 0) {
//             /* down swipe */
//             console.log('down');
//         } else {
//             /* up swipe */
//             console.log('up');
//         }
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;
// };






// window.onwheel = e => {
//     if (e.deltaY >= 0) {
//         // Scrolling Down with mouse
//         console.log('Scroll Down');
//     } else {
//         // Scrolling Up with mouse
//         console.log('Scroll Up');
//     }
// }