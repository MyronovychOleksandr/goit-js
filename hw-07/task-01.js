const task1 = document.getElementById("categories");
console.log(`'В списке ${task1.childElementCount} категории'`);

const itemsArray = Array.from(task1.children);

itemsArray.map(function (item) {
  console.log(`Категория:`, item.children[0].textContent);
  console.log(`Количество элементов:`, item.children[1].children.length);
});
