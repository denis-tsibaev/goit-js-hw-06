const inputEl = document.querySelector("#validation-input");

const lengthCheking = function (e) {
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

inputEl.addEventListener("blur", lengthCheking);

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
