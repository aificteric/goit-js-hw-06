/* const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInputField = loginForm.elements.email;
  const passwordInputField = loginForm.elements.password;

  if (
    emailInputField.value.trim() === '' ||
    passwordInputField.value.trim() === ''
  ) {
    alert('All field are required to be filled in.');
  } else {
    const formEndData = {
      email: emailInputField.value,
      passwordInputField: passwordInputField.value,
    };
    console.log(formEndData);

    loginForm.reset();
  }
}); */

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, password } = loginForm.elements;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All field are required to be filled in.');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);

    loginForm.reset();
  }
});
