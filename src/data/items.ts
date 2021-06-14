import { IWinnable, Winnable, WinnableType } from "@/models/winnable";
import Item from "@/models/item";

export const items: IWinnable[] = [
  new Winnable(WinnableType.item, 0.18, new Item("5$ Arabela Store Credit")),
  new Winnable(WinnableType.item, 0.12, new Item("10$ Arabela Store Credit")),
  new Winnable(WinnableType.item, 0.01, new Item("50$ Arabela Store Credit")),
  new Winnable(WinnableType.item, 0.15, new Item("1LB Free Shipping")),
  new Winnable(WinnableType.item, 0.1, new Item("2LB Free Shipping")),
  new Winnable(WinnableType.item, 0.01, new Item("5LB Free Shipping")),
  new Winnable(WinnableType.item, 0.05, new Item("PS5 Controller")),
  new Winnable(WinnableType.tryAgain, 0.18),
  new Winnable(WinnableType.nothing, 0.2),
];
