const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', inputHandler);
function inputHandler(event) {
  output.textContent = event.currentTarget.value;
}

input.addEventListener('change', removeSpace);

function removeSpace(event) {
  let name = output.textContent;
  if (name[name.length - 1] === ' ') {
    output.textContent = output.textContent.slice(0, -1);
  }
}
