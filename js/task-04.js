// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  spanValue: document.querySelector("#value"),
};

const initialStateOfValue = 50;
refs.spanValue.textContent = initialStateOfValue;
let counterValue = initialStateOfValue;

refs.decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  refs.spanValue.textContent = counterValue;
});

refs.incrementButton.addEventListener("click", () => {
  counterValue += 1;
  refs.spanValue.textContent = counterValue;
});

// Можно вынести функции отдельно, хотя там всего две строчки
// function decrement() {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// }

// function increment() {
//   counterValue += 1;
//   valueEl.textContent = counterValue;
// }

// decrementButton.addEventListener("click", decrement);
// incrementButton.addEventListener("click", increment);
