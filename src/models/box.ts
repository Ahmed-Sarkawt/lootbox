import Item from "./item";

export default class Box {
  item: Item;

  constructor(item: Item) {
    this.item = item;
  }
}
