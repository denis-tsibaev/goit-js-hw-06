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
