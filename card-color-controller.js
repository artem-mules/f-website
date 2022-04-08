//
let array__colors = ['#FF6161', '#7BF09F', '#0A4032'];
let data__invertTextColor = '#FFFB69';
let data__invertLabelColor = '#0A4032';
//–––––
let array__colorItems = document.querySelectorAll('[order-color-item]');
let colorPicker = 0;


array__colorItems.forEach((element__colorItem, id__colorItem) => {
    data__currentColor = array__colors[colorPicker];
    array__currentBgItems = element__colorItem.querySelectorAll('[order-color-bg]');

    array__currentBgItems.forEach(element__bgItem => {
        element__bgItem.style.backgroundColor = data__currentColor;
        if (data__currentColor == '#FFFB69') {
            let array__currentTextValues = element__colorItem.querySelectorAll('[order-color-label-text]');
            let array__labelsBg = element__colorItem.querySelectorAll('[order-color-label-bg]');

            array__currentTextValues.forEach(textValue => {
                textValue.style.color = data__invertTextColor;
            });
            array__labelsBg.forEach(labelBg => {
                labelBg.style.backgroundColor = data__invertLabelColor;
            });
        } 
    });
    if (colorPicker != (array__colors.length - 1)) {
        colorPicker = colorPicker + 1;
    } else {
        colorPicker = 0;
    }
});

