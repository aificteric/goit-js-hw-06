const categoryList = document.querySelector('#categories');
const categoryItems = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li');
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
