// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика.
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса.


const counter = {
    counterValue: 0,
    decrement() {
        this.counterValue -= 1;
    },
    increment() {
        this.counterValue += 1;
    },
};

const actionButton = document.querySelectorAll('#counter button')
const decrementBtn = actionButton[0];
const incrementBtn = actionButton[1];
const valueElement = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueElement.textContent = counter.counterValue;
});

incrementBtn.addEventListener('click', function () {
    counter.increment();
    valueElement.textContent = counter.counterValue;
});


// 1) создать переменную counterValue
// 2) создать функции инкремент и декремент
// * лучше всё это сделать в объекте и назвать counter

// 3) найти кнопку декремента
// 4) найти кнопку инкремента
// 5) найти значение счетчика в разметке

// 6) повесить на кнопку декремента функцию по клику
// 7) задать значению счетчика новое текстовое значение котрое равно counterValue

// 8) повесить на кнопку инкремента функцию по клику
// 9) задать значению счетчика новое текстовое значение котрое равно counterValue