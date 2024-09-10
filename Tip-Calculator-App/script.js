const calculateTip = () => {
  const billAmount = parseFloat(document.getElementById("inputTag").value);
  const tipPercentage = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    document.getElementById("result").textContent =
      "Please Enter Valid Number.";
    return;
  }
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;

  document.getElementById("result").innerHTML = `
<p>Tip Amount: $${tipAmount.toFixed(2)}</p>
<p>Total Amaunt:$${totalAmount.toFixed(2)}</p>
`;
};
