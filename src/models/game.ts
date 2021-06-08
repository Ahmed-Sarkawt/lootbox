import { IWeightedPrizeProbabilityItem } from "./weightedPrizeProbabilityItem";
import Box from "./box";
import Item from "./item";
import { items } from "@/data/items";

interface Playable {
  run: () => Box[];
}

class Game implements Playable {
  items: IWeightedPrizeProbabilityItem[];
  numberOfBoxes: number;

  constructor(items: IWeightedPrizeProbabilityItem[], numberOfBoxes: number) {
    // The sum of all probability weights must equal 1
    const sum = items.reduce((acc, currentValue) => {
      acc += currentValue.probability;
      return acc;
    }, 0);

    if (sum !== 1) {
      throw new Error(
        "sum of all weights is larger than 1. It must equal one exactly"
      );
    }

    this.items = items;
    this.numberOfBoxes = numberOfBoxes;
  }

  run(): Box[] {
    const boxes = Array.from(Array(this.numberOfBoxes).keys()).map(() => {
      const result = Math.random();
      let sum = 0;

      for (const item of this.items) {
        sum += item.probability;
        if (result <= sum) {
          return new Box(new Item(item.name));
        }
      }
    });

    return boxes as Box[];
  }
}

export const appGame = new Game(items, 9);
