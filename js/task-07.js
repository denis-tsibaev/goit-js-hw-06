const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", (e) => {
  console.log(e.target.value);
  spanEl.style.fontSize = e.target.value + "px";
});
