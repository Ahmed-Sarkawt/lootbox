import { IWinnable, Winnable, WinnableType } from "@/models/winnable";
import Item from "@/models/item";

export const items: IWinnable[] = [
  
  new Winnable(WinnableType.item, 0.2, new Item("5$ Arabela Store Credit")),
  new Winnable(WinnableType.item, 0.1, new Item("10$ Arabela Store Credit")),
  new Winnable(WinnableType.item, 0.1, new Item("15 Arabela Store Credit")),
  new Winnable(WinnableType.item, 0.05, new Item("15 Arabela Store Credit")),
  new Winnable(WinnableType.item, 0.04, new Item("25$ Arabela Store Credit")),
  new Winnable(WinnableType.item, 0.01, new Item("50$ Arabela Store Credit")),
  
  new Winnable(WinnableType.item, 0.15, new Item("1LB Free Shipping")),
  new Winnable(WinnableType.item, 0.04, new Item("2B Free Shipping")),
  new Winnable(WinnableType.item, 0.01, new Item("3B Free Shipping")),
  

  new Winnable(WinnableType.tryAgain, 0.15),
  new Winnable(WinnableType.nothing, 0.15,
];
