// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const nameSpanEl = document.querySelector("#name-output");
const nameInputEl = document.querySelector("#name-input");

nameInputEl.addEventListener("input", (e) => {
  e.target.value.trim() === ""
    ? (nameSpanEl.textContent = "Anonymous")
    : (nameSpanEl.textContent = e.target.value);
});
