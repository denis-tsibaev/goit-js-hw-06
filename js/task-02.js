const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.querySelector("#ingredients");

const makeAlist = ingredients.map((element) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = element;

  return li;
});

ulElement.append(...makeAlist);
