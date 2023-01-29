const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", () => {
  console.log("нажали кнопку создать");
  createBoxes();
});

destroyBtnEl.addEventListener("click", () => {
  console.log("нажали кнопку разрушить");
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  console.log(
    `<div style="width=30px", height=30px", "backgroundColor=${getRandomHexColor()}"></div>`
  );
  divBoxesEl.append(
    `<div style=style="width=30px", height=30px", "backgroundColor=${getRandomHexColor()}"></div>`
  );
}
