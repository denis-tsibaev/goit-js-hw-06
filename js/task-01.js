const ul = Array.from(document.querySelector("#categories").children);

const itemsLength = ul.length;

console.log("Number of categories: ", itemsLength);
console.log("");

for (const element of ul) {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
  console.log("");
}
