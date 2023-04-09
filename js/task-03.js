const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//* Adding items to the list

const galleryList = document.querySelector('.gallery');
const galleryItems = images.map(
  (image) =>
    `<li><img src="${image.url}" width = "350px" height = "200px" alt="${image.alt}"></li>`
);
galleryList.insertAdjacentHTML('beforeend', galleryItems.join(''));

//* Adding inline-CSS rules

const style = document.createElement('style');
style.textContent = `
  .gallery {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;
document.head.insertAdjacentElement('beforeend', style);
