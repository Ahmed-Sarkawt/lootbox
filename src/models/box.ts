import Item from "./item";

export default class Box {
  item: Item;
  id = Math.random().toFixed(7).toString();

  constructor(item: Item) {
    this.item = item;
  }
}
