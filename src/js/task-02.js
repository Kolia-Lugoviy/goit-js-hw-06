

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listEl = document.querySelector('#ingredients')
console.log(listEl)

const liEl = ingredients.map(ingredient => {
  const li = document.createElement(`li`);
  li.classList.add(`item`);
  li.textContent = ingredient;

  return li

  console.log(li)

})


listEl.append(...liEl)
