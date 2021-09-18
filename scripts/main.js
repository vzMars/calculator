const topDisplay = document.querySelector('#top-display');
const bottomDisplay = document.querySelector('#bottom-display');

const numBtns = document.querySelectorAll('.numBtns');
const operatorBtns = document.querySelectorAll('.operatorBtns');

const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');

let currentNum1 = '';
let currentNum2 = '';
let currentOperator = '';
let answer = '';

numBtns.forEach((numBtn) => numBtn.addEventListener('click', displayNumber));
operatorBtns.forEach((operatorBtn) =>
  operatorBtn.addEventListener('click', displayOperator)
);
equalBtn.addEventListener('click', displayAnswer);
clearBtn.addEventListener('click', clearDisplay);

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
  if (num2 == 0) {
    alert('One Does Not Simply Divide By Zero...');
    currentNum2 = '';
    return 0;
  }
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
  if (currentNum1 !== '' && currentOperator !== '' && currentNum2 !== '') {
    answer = parseFloat(
      operate(
        parseFloat(currentNum1),
        parseFloat(currentNum2),
        currentOperator
      ).toFixed(2)
    );
    console.log(answer);
    topDisplay.innerText = answer;
  }
}

function displayNumber(e) {
  let tempNum = getNum(e.target.id);
  console.log(tempNum);
  if (currentOperator === '') {
    console.log(`currentNum1 before: ${currentNum1}`);
    currentNum1 += tempNum;
    console.log(`currentNum1 after: ${currentNum1}`);
  } else {
    console.log(`currentNum2 before: ${currentNum1}`);
    currentNum2 += tempNum;
    console.log(`currentNum2 after: ${currentNum1}`);
  }
  enableOperatorBtns();
  bottomDisplay.innerText = currentNum1 + currentOperator + currentNum2;
}

function displayOperator(e) {
  let tempOperator = getOperator(e.target.id);
  console.log(tempOperator);
  if (currentOperator === '') {
    console.log(`currentOperator before: ${currentOperator}`);
    currentOperator += tempOperator;
    console.log(`currentOperator after: ${currentOperator}`);
  } else {
    displayAnswer();
    currentNum1 = answer;
    currentOperator = tempOperator;
    currentNum2 = '';
  }
  disableOperatorBtns();
  enableDecimalBtn();
  bottomDisplay.innerText = currentNum1 + currentOperator + currentNum2;
}

function clearDisplay() {
  currentNum1 = '';
  currentNum2 = '';
  currentOperator = '';
  answer = '';
  topDisplay.innerText = answer;
  bottomDisplay.innerText = currentNum1 + currentOperator + currentNum2;
}

function getNum(num) {
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
      disableDecimalBtn();
      return '.';
    default:
      return 'Something went wrong';
  }
}

function getOperator(operator) {
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

function enableDecimalBtn() {
  numBtns[10].disabled = false;
}

function disableDecimalBtn() {
  numBtns[10].disabled = true;
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
