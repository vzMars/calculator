const topDisplay = document.querySelector('#top-display');
const bottomDisplay = document.querySelector('#bottom-display');
const numBtns = document.querySelectorAll('.numBtns');
const operatorBtns = document.querySelectorAll('.operatorBtns');
const equalBtn = document.querySelector('#equal');

let operationString = '';
let numbers = [];
let operator = '';
let answer = '';

numBtns.forEach((numBtn) => numBtn.addEventListener('click', displayNumber));
operatorBtns.forEach((operatorBtn) =>
  operatorBtn.addEventListener('click', displayOperator)
);

equalBtn.addEventListener('click', displayAnswer);

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
    case '−':
      return subtract(num1, num2);
    case '×':
      return multiply(num1, num2);
    case '÷':
      return divide(num1, num2);
    default:
      return '';
  }
}

function displayAnswer() {
  operator = operationString.replace(/[0-9]|\./g, '');
  numbers = operationString.split(/\+|\−|\×|\÷/g);
  console.log(operationString);
  console.log(operator);
  console.log(numbers);

  answer = operate(parseFloat(numbers[0]), parseFloat(numbers[1]), operator);

  topDisplay.innerText = answer;
}

function displayNumber(e) {
  operationString += getChosenNum(e.target.id);
  bottomDisplay.innerText = operationString;
  enableOperatorBtns();
}

function displayOperator(e) {
  if (
    operationString.includes('+') ||
    operationString.includes('−') ||
    operationString.includes('×') ||
    operationString.includes('÷')
  ) {
    displayAnswer();
    operationString = answer;
  }
  operationString += getChosenOperator(e.target.id);
  bottomDisplay.innerText = operationString;
  disableOperatorBtns();
}

function getChosenNum(num) {
  switch (num) {
    case 'zero':
      return '0';
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    case 'seven':
      return '7';
    case 'eight':
      return '8';
    case 'nine':
      return '9';
    case 'decimal':
      return '.';
    default:
      return 'Something went wrong';
  }
}

function getChosenOperator(operator) {
  switch (operator) {
    case 'add':
      return '+';
    case 'subtract':
      return '−';
    case 'multiply':
      return '×';
    case 'divide':
      return '÷';
    default:
      return 'Something went wrong';
  }
}

function enableOperatorBtns() {
  for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].disabled = false;
  }
}

function disableOperatorBtns() {
  for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].disabled = true;
  }
}
