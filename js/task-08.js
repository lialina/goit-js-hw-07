// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество
//     элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//     При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//     Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
//      Имеет случайный rgb цвет фона
//      Размеры самого первого div - 30px на 30px
//      Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.


const inputElement = document.querySelector('#controls input');
console.log(inputElement);

const actionButtons = document.querySelectorAll('#controls button');
const renderBtn = actionButtons[0];
const destroyBtn = actionButtons[1];
console.log(renderBtn);
console.log(destroyBtn);

const boxesDiv = document.querySelector('#boxes');
console.log(boxesDiv);

const createBoxes = (amount) => {
    amount = inputElement.value;
    for (let i = 0; i < amount; i += 1) {
        boxesDiv.insertAdjacentHTML('beforeend',
            '<div class="new-div" style="width:30px; height:30px; " >Див</div>');
        
    }
}

const destroyBoxes = () => {
    while (boxesDiv.firstChild) {
    boxesDiv.removeChild(boxesDiv.firstChild);
    }
}

renderBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);