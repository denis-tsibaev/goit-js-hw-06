const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const spanValueEl = document.querySelector("#value");
const initialStateOfValue = 50;
spanValueEl.textContent = initialStateOfValue;
let counterValue = initialStateOfValue;

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  spanValueEl.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  spanValueEl.textContent = counterValue;
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
