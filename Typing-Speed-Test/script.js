document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "A journey of a thousand miles begins with a single step ",
    "To be or not To be, that is the question.",
    "All the glitters is not gold",
    "The quuick brown fox jumps over the lazy dog",
    "The only thing we have to fear is fear itself.",
  ];

  const quoteDisplay = document.getElementById("quotes");
  const inputBox = document.getElementById("input-box");
  const startButton = document.getElementById("start-button");
  const resultDisplay = document.getElementById("result-div");

  let startTime;
  let currentQuote;
  startButton.addEventListener("click", startTest);
  inputBox.addEventListener("input", checkInput);

  function startTest() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    quoteDisplay.textContent = currentQuote;
    inputBox.value = "";
    inputBox.removeAttribute("disabled");
    inputBox.focus();
    resultDisplay.textContent = "";
    startTime = new Date().getTime();
  }
  function checkInput() {
    const typedText = inputBox.value;
    if (typedText === currentQuote) {
      const endTime = new Date().getTime();
      const timeTaken = (endTime - startTime) / 1000;
      const wordsPerMinutes = (typedText.split(" ").length / timeTaken) * 60;
      inputBox.setAttribute("disabled", true);
      resultDisplay.textContent = `You typed at ${wordsPerMinutes.toFixed(
        2
      )}words per minute .`;
    }
  }
});
