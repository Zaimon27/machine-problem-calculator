const display = document.getElementById('display');

function appendValue(value) {
  if (value === '*') {
    display.value += '×';  // Display the times symbol
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value.replace(/×/g, '*');  // Use * for calculation
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}
