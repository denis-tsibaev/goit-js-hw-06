// Напиши скрипт управления формой логина.
// 1. Обработка отправки формы form.login-form должна быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// 5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const emailValue = e.currentTarget.elements.email.value;
  const passwordValue = e.currentTarget.elements.password.value;
  const formData = { emailValue, passwordValue };

  console.log("formData", formData);

  if (emailValue === "" || passwordValue === "") {
    alert("все поля должны быть заполнены");
  }

  loginFormEl.reset();
}

//*******************************
//то же самое, но через формдату, а не через элементс
// function onFormSubmit(e) {
//   e.preventDefault();

//   const formData = new FormData(e.currentTarget);

//   formData.forEach((value, name) => {
//     console.log("name", name);
//     console.log("value", value);
//   });

//   console.log(...formData);

//   loginFormEl.reset();
// }
