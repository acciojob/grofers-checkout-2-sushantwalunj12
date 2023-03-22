const prices = document.querySelectorAll('[data-ns-test="prices"]');
let total = 0;

prices.forEach((price) => {
  const priceValue = parseFloat(price.innerHTML);
  total += priceValue;
});

const table = document.querySelector('table');
const newRow = table.insertRow();
const newCell = newRow.insertCell();
newCell.innerHTML = total;
newCell.setAttribute('data-ns-test', 'grandTotal');