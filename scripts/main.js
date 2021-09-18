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
window.addEventListener('keydown', getKeyInput);

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
    topDisplay.innerText = answer;
    // currentNum1 = '';
    // currentNum2 = '';
    // currentOperator = '';
    // disableOperatorBtns();
  }
}

function displayNumber(e) {
  let tempNum = '';
  if (e.type === 'click') {
    tempNum = getNum(e.target.id);
  } else {
    tempNum = e;
  }
  if (currentOperator === '') {
    currentNum1 += tempNum;
  } else {
    currentNum2 += tempNum;
  }
  enableOperatorBtns();
  bottomDisplay.innerText = currentNum1 + currentOperator + currentNum2;
}

function displayOperator(e) {
  if (operatorBtns[0].disabled === false) {
    let tempOperator = '';
    if (e.type === 'click') {
      tempOperator = getOperator(e.target.id);
    } else {
      tempOperator = getOperator(e);
    }
    if (currentOperator === '') {
      currentOperator += tempOperator;
    } else {
      displayAnswer();
      currentNum1 = answer;
      currentOperator = tempOperator;
      currentNum2 = '';
    }
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
  disableOperatorBtns();
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
    case '+':
      return '+';
    case 'subtract':
    case '-':
      return '−';
    case 'multiply':
    case '*':
      return '×';
    case 'divide':
    case '/':
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
function getKeyInput(e) {
  if ((e.key >= 0 && e.key <= 9) || e.key === '.') {
    if (e.key === '.') {
      disableDecimalBtn();
    }
    displayNumber(e.key);
  }
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    displayOperator(e.key);
  }
  if (e.key === 'Enter' || e.key === '=') {
    displayAnswer();
  }
  if (e.key === 'Delete' || e.key === 'Escape') {
    clearDisplay();
  }
}
