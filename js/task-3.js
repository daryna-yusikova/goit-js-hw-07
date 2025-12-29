const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', inputHandler);
function inputHandler(event) {
  const outputField = event.currentTarget.value.trim();
  console.log(outputField);
  output.textContent = outputField === '' ? 'Anonymous' : outputField;
}
