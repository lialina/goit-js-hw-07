// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
    // Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
    // элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categories = document.querySelector('ul#categories');
const categoriesAmount = categories.children.length;
const categoriesAmountMessage = `В списке ${categoriesAmount} категории.`;
console.log(categoriesAmountMessage);

const categoriesElem = document.querySelectorAll('.item');

categoriesElem.forEach(elem => {
    const categoriesElemTitle = elem.firstElementChild.textContent;
    console.log(`Категория: ${categoriesElemTitle}`);
    const categoriesElemAmount = elem.lastElementChild.children.length;
    console.log(`Количество элементов: ${categoriesElemAmount}`);
});