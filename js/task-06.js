// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//     Если введено подходящее количество, то border инпута становится зеленым,
//         если неправильное - красным.

// Для добавления стилей, используй CSS - классы valid и invalid.


const inputElement = document.querySelector('#validation-input');
inputElement.addEventListener('blur', function () {
    if (inputElement.dataset.length == inputElement.value.length) {
        inputElement.classList.add("valid");
    } else {
        inputElement.classList.add("invalid");
    }
});
    

// 1) создать inputElement
// 2) добавить событие blur и фунцию
// 3) написать функцию проверки через иф
// 4) если дата ленгс (строка) == длина инпут валуе (число)
// * (при сравнении строка приведется к числу и всё ок)
//      - тру - цвет зеленый, то есть добавить класс valid,
// 5) если нет - фалс - цвет красный, добавить класс invalid
