const submitForm = document.querySelector('.login-form');
submitForm.addEventListener('submit', handleForm);
function handleForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  } else {
    let userData = {};
    userData.email = email.trim();
    userData.password = password.trim();
    console.log(userData);
  }
  form.reset();
}
