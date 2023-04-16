/* // Обираємо список Catogories з li-elements всередині

const categoryList = document.querySelector('#categories');
const categoryItems = document.querySelectorAll('li.item');

// Виводомо в консоль кількість категорій

console.log(`Number of categories: ${categoryItems.length}`);

// Перебираємо для кожного елементу списку

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li');
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
}); */
//!=====================================

//* Отримуємо посилання на список категорій та його елементи

const categoryList = document.getElementById('categories');
const categoryItems = Array.from(categoryList.children);

// * Виводимо в консоль кількість категорій

console.log(`Number of categories: ${categoryItems.length}`);

//* Перебираємо кожен елемент списку

categoryItems.forEach((category) => {
  //? Отримуємо заголовок категорії та список елементів внутрішніх пунктів
  const categoryTitle = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children;

  //? Виводимо інформацію про категорію та її кількість елементів
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
