const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

//* Перебираємо старий та створюємо новий масив і виводимо значення в список

const ingredientsItems = ingredients.map((ingredient) => {
  const listOfItems = document.createElement('li');
  listOfItems.textContent = ingredient;
  listOfItems.classList.add('item');
  return listOfItems;
});

ingredientsList.append(...ingredientsItems);
