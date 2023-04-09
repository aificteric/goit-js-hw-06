/* const increaseButton = document.getElementById('increment');
const decreaseButton = document.getElementById('decrement');
const counterVisibleValue = document.getElementById('value');

let counterValue = 0;
counterVisibleValue.textContent = counterValue;

increaseButton.addEventListener('click', () => {
  counterValue++;
  counterVisibleValue.textContent = counterValue;
});

decreaseButton.addEventListener('click', () => {
  counterValue--;
  counterVisibleValue.textContent = counterValue;
}); */

const counterVisibleValue = document.getElementById('value');
const increaseButton = document.querySelector('[data-action="increment"]');
const decreaseButton = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

function updateCounterDisplay() {
  counterVisibleValue.textContent = counterValue;
}

function incrementCounter() {
  counterValue += 1;
  updateCounterDisplay();
}

function decrementCounter() {
  counterValue -= 1;
  updateCounterDisplay();
}

decreaseButton.addEventListener('click', decrementCounter);
increaseButton.addEventListener('click', incrementCounter);
updateCounterDisplay();
