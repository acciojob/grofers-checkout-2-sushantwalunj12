const getTotalBtn = document.getElementById("getTotalBtn");
getTotalBtn.addEventListener("click", () => {
  const prices = document.querySelectorAll('[data-ns-test="prices"]');
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += parseFloat(prices[i].textContent);
  }
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td></td>
    <td data-ns-test="grandTotal">${total}</td>
  `;
  document.getElementById("table").appendChild(totalRow);
});
