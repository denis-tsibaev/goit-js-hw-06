const btnChangeColorEl = document.querySelector(".change-color");
const colorSpanEl = document.querySelector(".color");

btnChangeColorEl.addEventListener("click", colorizeBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorizeBody() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = getRandomHexColor();
}
