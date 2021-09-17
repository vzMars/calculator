const numBtns = document.querySelectorAll('.numBtns');
const bottomDisplay = document.querySelector('#bottom-display');

numBtns.forEach((numBtn) => numBtn.addEventListener('click', displayNum));

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return 'Please use the correct operators';
  }
}

function displayNum(e) {
  console.log(e.target.id);
}
