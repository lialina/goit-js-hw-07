// Напиши скрипт, который реагирует на изменение значения input#font - size - control
//     (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.


const inputElement = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputElement.addEventListener('input', function () {
    textSpan.style.fontSize = `${inputElement.value}px`;
})


// 1) создать inputElement
// 2) создать textSpan
// 3) получить значение этого инпута
// 4) записать это значение в стили (в фонтсайз) спана (id="text")