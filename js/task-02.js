const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul#ingriidiients")
let fragment = new DocumentFragment();
for ( const value  of ingredients) { 
const itemOfing  = document.createElement("li")
itemOfing.classList.add("item");
itemOfing.textContent += value;
fragment.appendChild(itemOfing)
}
document.querySelector('ul#ingredients').append(fragment)
