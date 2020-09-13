const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const list = document.querySelector("#ingredients");
console.log(list);

const items = ingredients.map(function (ingredient) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});
console.log(items);

list.append(...items);
