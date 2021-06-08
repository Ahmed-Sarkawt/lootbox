import Item from "./item";

export interface IWeightedPrizeProbabilityItem {
  readonly name: string;
  readonly probability: number;
}

export class WeightedPrizeProbabilityItem
  extends Item
  implements IWeightedPrizeProbabilityItem
{
  public readonly probability: number;

  constructor(itemName: string, probability: number) {
    super(itemName);
    this.probability = probability;
  }
}
