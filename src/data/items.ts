import {
  IWeightedPrizeProbabilityItem,
  WeightedPrizeProbabilityItem,
} from "../models/weightedPrizeProbabilityItem";

export const items: IWeightedPrizeProbabilityItem[] = [
  new WeightedPrizeProbabilityItem("5$ Arabela Store Credit", 0.18),
  new WeightedPrizeProbabilityItem("10$ Arabela Store Credit", 0.12),
  new WeightedPrizeProbabilityItem("50$ Arabela Store Credit", 0.01),
  new WeightedPrizeProbabilityItem("1LB Free Shipping", 0.15),
  new WeightedPrizeProbabilityItem("2LB Free Shipping", 0.1),
  new WeightedPrizeProbabilityItem("5LB Free Shipping", 0.01),
  new WeightedPrizeProbabilityItem("PS5 Controller", 0.05),
  new WeightedPrizeProbabilityItem("Try Again", 0.18),
  new WeightedPrizeProbabilityItem("You Have Won Nothing", 0.2),
];
