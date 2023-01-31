// В HTML есть пустой список ul#ingredients.
// В JavaScript есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients:

// 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul.ingredients.

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
