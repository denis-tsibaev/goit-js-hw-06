// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refs = {
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  divBoxesEl: document.querySelector("#boxes"),
  input: document.querySelector("#controls > input"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.createBtnEl.addEventListener("click", () => {
  console.log("нажали кнопку создать");
  getAmount();
});

refs.destroyBtnEl.addEventListener("click", () => {
  console.log("нажали кнопку разрушить");
  destroyBoxes();
  refs.input.value = 1;
  refs.createBtnEl.disabled = false;
});

function destroyBoxes() {
  refs.divBoxesEl.innerHTML = "";
}

function getAmount() {
  const amount = refs.input.value;
  console.log("input.value: ", amount);
  createBoxes(amount);
}

function createBoxes(number) {
  for (let index = 0; index < number; index += 1) {
    const basicSize = 30;
    const BoxSize = basicSize + index * 10;
    refs.divBoxesEl.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${BoxSize}px; height: ${BoxSize}px; background-color:${getRandomHexColor()}"></div>`
    );
  }
  refs.createBtnEl.disabled = true;
}

//   `<div style="width: 30px; height: 30px; background-color:${getRandomHexColor()}"></div>`

// function createBoxes() {
//   const newBox = document.createElement("div");
//   newBox.style.width = "30px";
//   newBox.style.height = "30px";
//   newBox.style.backgroundColor = getRandomHexColor();
//   refs.divBoxesEl.appendChild(newBox);
// }
