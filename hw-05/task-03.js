class Storage {
  constructor(array) {
    this.items = array;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    console.log(this.items);
    this.items.push(item);
  }
  removeItem(item) {
    console.log(this.items);
    const itemIndex = this.items.indexOf(item);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);
// [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items);
// [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items);
// [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
