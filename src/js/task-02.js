
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


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
