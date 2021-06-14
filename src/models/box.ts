import { Winnable } from "@/models/winnable";

export default class Box {
  winnable: Winnable;
  id = Math.random().toFixed(7).toString();

  constructor(winnable: Winnable) {
    this.winnable = winnable;
  }
}
