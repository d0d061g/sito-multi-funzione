let calculation = localStorage.getItem(`calculation`) || ``;

displayCartQuantity();

function updateCalculation(value) {
  calculation += value;
  displayCartQuantity();
  localStorage.setItem('calculation', calculation);
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function displayCartQuantity() { 
  document.querySelector(`.js-result-display`)
    .innerHTML = calculation;
}