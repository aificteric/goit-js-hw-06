const widget = document.querySelector('.widget');
const color = widget.querySelector('.color');
const colorBtnChange = widget.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorBtnChange.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
});
