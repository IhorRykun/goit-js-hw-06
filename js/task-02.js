const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const element = document.querySelector("#ingredients");

const itemEl = ingredients.map(ingredient => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredient;
    return element;
});

console.log(element);

element.append(...itemEl);