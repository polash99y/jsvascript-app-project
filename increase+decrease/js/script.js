const counterElement = document.getElementById("counter");
const plusButton = document.getElementById("plusBtn");
const minusButton = document.getElementById("minusBtn");

let counter = 0;

const updateCounter = (value) => {
  counter = counter + value;
  counterElement.innerText = counter;
  if (counter >= 10) {
    plusButton.setAttribute("disabled", true);
  } else {
    plusButton.removeAttribute("disabled", false);
  }

  // minusBtnCount

  if (counter <= 0) {
    minusButton.setAttribute("disabled", true);
  } else {
    minusButton.removeAttribute("disabled", false);
  }
};

plusButton.addEventListener("click", () => {
  updateCounter(1);
});

minusButton.addEventListener("click", () => {
  updateCounter(-1);
});
