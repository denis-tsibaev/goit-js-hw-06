// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector("#validation-input");

const lengthChecking = function (e) {
  console.log("input value", e.target.value.length);
  console.log("should be", Number(inputEl.getAttribute("data-length")));

  if (e.target.value.length === Number(inputEl.getAttribute("data-length"))) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", lengthChecking);

//второй варик - onblur вешается сразу на элемент инпута
// const inputEl = document.querySelector("#validation-input");

// inputEl.onblur = function () {
//   console.log("inputEl value", inputEl.value.length);
//   console.log("should be", Number(inputEl.getAttribute("data-length")));

//   if (inputEl.value.length === Number(inputEl.getAttribute("data-length"))) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//   } else {
//     inputEl.classList.remove("valid");
//     inputEl.classList.add("invalid");
//   }
// };
