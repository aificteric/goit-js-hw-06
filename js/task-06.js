const validationInputField = document.getElementById('validation-input');

validationInputField.addEventListener('blur', () => {
  const expectedPutLength = parseInt(
    validationInputField.getAttribute('data-length')
  );
  const actualPutLength = validationInputField.value.length;
  if (expectedPutLength === actualPutLength) {
    validationInputField.classList.add('valid');
    validationInputField.classList.remove('invalid');
  } else {
    validationInputField.classList.add('invalid');
    validationInputField.classList.remove('valid');
  }
});
