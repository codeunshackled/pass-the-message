let textInput = document.querySelector('.message');
let messageBox = document.querySelector('.delivered');

function deliverMessage(e) {
  e.preventDefault();
  let inputText = e.target.querySelector('input');
  let captureMessage = inputText.value;
  console.log(e.target.querySelector('input'));
  messageBox.innerHTML = captureMessage;
  messageBox.append(captureMessage);
  setTimeout(() => messageBox.innerHTML = " ", 3000);
  inputText.value = ' ';
}
textInput.addEventListener('submit', deliverMessage);