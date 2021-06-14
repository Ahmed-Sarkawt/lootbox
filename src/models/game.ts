import { IWinnable } from "./winnable";
import Box from "./box";
import { items } from "@/data/items";

interface Playable {
  run: () => Box[];
}

class Game implements Playable {
  winnables: IWinnable[];
  numberOfBoxes: number;

  constructor(items: IWinnable[], numberOfBoxes: number) {
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

    this.winnables = items;
    this.numberOfBoxes = numberOfBoxes;
  }

  run(): Box[] {
    const boxes = Array.from(Array(this.numberOfBoxes).keys()).map(() => {
      const result = Math.random();
      let sum = 0;

      for (const winnable of this.winnables) {
        sum += winnable.probability;
        if (result <= sum) {
          return new Box(winnable);
        }
      }
    });

    return boxes as Box[];
  }
}

export const appGame = new Game(items, 9);
