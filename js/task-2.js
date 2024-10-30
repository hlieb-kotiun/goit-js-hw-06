console.log("");
console.log("Task-2");
console.log("");

class Storage {
  #item;
  constructor(lalala) {
    this.#item = lalala;
  }
  getItems() {
    return this.#item;
  }
  addItem(newItem) {
    this.#item.push(newItem);
  }
  removeItem(itemToRemove) {
    const index = this.#item.indexOf(itemToRemove);
    if (index !== -1) {
      return this.#item.splice(index, 1);
    }
    return;
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
