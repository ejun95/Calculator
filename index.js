const display = document.querySelector('#display-text');
const buttons = document.querySelectorAll('.number-btn');
const operations = document.querySelectorAll('.ops-btn');

let num1 = 0;
let num2 = 0;
let opCounter = 0;
let operation = '';

// When user presses numbers
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    if(opCounter > 0) {
      display.textContent = '';
    }
    if(event.target.id === 'clear') {
      display.textContent = '';
    } else if(event.target.id === '.') {
      if(!display.textContent.includes('.')) {
        display.textContent += event.target.innerText
      }
    } else {
      if(display.textContent.length < 12) {
        display.textContent += event.target.innerText
      }
    }
  })
});

// When user presses an operation button
operations.forEach(button => {
  button.addEventListener(('click'), (event) => {
    if(button.id === 'equals') {
      opCounter = 0;
      num2 = display.textContent;
      display.textContent = selectOperator(operation, num1, num2);
    } else {
      operation = event.target.id;
      if(opCounter >= 1) {
        num2 = display.textContent;
        display.textContent = selectOperator(operation, num1, num2);
        num1 = display.textContent;
      } else {
        num1 = display.textContent;
      }
      opCounter += 1;
    }
  })
});

function selectOperator(operation, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch(operation) {
    case 'divide':
      display.textContent = '';
      return divide(num1,num2);
      break;
    case 'multiply':
      display.textContent = '';
      return multiply(num1,num2);
      break;
    case 'subtract':
      display.textContent = '';
      return subtract(num1,num2);
      break;
    case 'add':
      display.textContent = '';
      return add(num1,num2);
      break;
    default:
      console.log('How did I get here');
      break;
  }
}

const add = function(a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return Math.round((a * b) * 10000) / 10000;
}

const divide = function (a, b) {
  return Math.round((a / b) * 10000) / 10000 ;
}

