// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const inputElement = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');

inputElement.addEventListener('input', function () {
    outputSpan.textContent = inputElement.value;
})


// 1) создать inputElement - найти доступ к элементу инпуту (id="name-input")
// 2) создать outputSpan - найти доступ к элементу спан (id="name-output")
// 3) сделать на inputElement событие инпут и что нужно сделать:

//      а нужно сделать вот что: 
// 4) изменить текстовое значение outputSpan на то, что было введено в инпуте,
// то есть на inputElement.value