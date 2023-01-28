const nameSpanEl = document.querySelector("#name-output");
const nameInputEl = document.querySelector("#name-input");

nameInputEl.addEventListener("input", (e) => {
  e.target.value.trim() === ""
    ? (nameSpanEl.textContent = "Anonymous")
    : (nameSpanEl.textContent = e.target.value);
});
