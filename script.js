let displayValue = '0';

function updateDisplay() {
  document.getElementById('result').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function appendToDisplay(val) {
  if (displayValue === '0') {
    displayValue = val;
  } else {
    displayValue += val;
  }
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

// Event listener for keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key) || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

updateDisplay();
