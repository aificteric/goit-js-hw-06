//* Обираємо список Catogories з li-elements всередині

const categoryList = document.querySelector('#categories');
const categoryItems = document.querySelectorAll('li.item');

//* Виводомо в консоль кількість категорій

console.log(`Number of categories: ${categoryItems.length}`);

//! Перебираємо для кожного елементу списку

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li');
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
