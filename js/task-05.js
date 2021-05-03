// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const inputElement = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');

inputElement.addEventListener('input', function () {
    if (inputElement.value == '') {
        outputSpan.textContent = 'незнакомец';
    } else {
        outputSpan.textContent = inputElement.value;
    }
});


// 1) создать inputElement - найти доступ к элементу инпуту (id="name-input")
// 2) создать outputSpan - найти доступ к элементу спан (id="name-output")
// 3) сделать на inputElement событие инпут и что нужно сделать:

//      а нужно сделать вот что: 
// 4) если инпут пустой, то равен 'незнакомец';
// 5) если ввести что-то новое было введено в инпуте, то изменить текстовое 
// значение outputSpan на то, что, было введено
