const genarateRGBColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const updateColor = () => {
  const color = genarateRGBColor();
  const colorBox = document.getElementById("colorBox");
  const colorCode = document.getElementById("colorCode");
  colorBox.style.backgroundColor = color;
  colorCode.innerText = color;
};
const copyColorCode = () => {
  const colorCode = document.getElementById("colorCode");
  const inputTag = document.createElement("input");
  document.body.appendChild(inputTag);
  inputTag.value = colorCode.innerText;
  inputTag.select();
  document.execCommand("copy");
  document.body.removeChild(inputTag);
  alert("Color copied to clipboard");
};

document.getElementById("copyButton").addEventListener("click", () => {
  copyColorCode();
});

const generateNewColorBtn = () => {
  updateColor();
};
