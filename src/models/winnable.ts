import Item from "./item";

export enum WinnableType {
  item = "item",
  tryAgain = "tryAgain",
  nothing = "nothing",
}

export interface IWinnable {
  readonly item?: Item;
  readonly probability: number;
  readonly type: WinnableType;
}

export class Winnable implements IWinnable {
  public readonly probability: number;
  public readonly item?: Item;
  public readonly type: WinnableType;

  constructor(type: WinnableType, probability: number, item?: Item) {
    if (type === WinnableType.item && !item) {
      throw new Error("an item must be provided for a winnable item");
    }

    this.probability = probability;
    this.item = item;
    this.type = type;
  }
}
