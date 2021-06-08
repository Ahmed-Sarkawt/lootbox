import Box from "@/models/box";
import { appGame } from "@/models/game";

export enum AppScene {
  welcome = "welcome",
  toMakeChoice = "toMakeChoice",
  choiceMade = "choiceMade",
}

const defaultState = (): AppState => ({
  scene: AppScene.welcome,
  boxes: appGame.run(),
  isRevealed: false,
  chosenBoxIndex: null,
});

export const AppStore = {
  state: defaultState(),

  mutations: {
    play(state: AppState) {
      state.scene = AppScene.toMakeChoice;
      state.boxes = appGame.run();
      state.isRevealed = false;
    },

    choose(state: AppState, boxIndex: number) {
      state.scene = AppScene.choiceMade;
      state.isRevealed = true;
      state.chosenBoxIndex = boxIndex;
    },

    reset(state: AppState) {
      state.scene = AppScene.welcome;
      state.chosenBoxIndex = null;
    },
  },
};

export interface AppState {
  scene: AppScene;
  boxes: Box[];
  isRevealed: boolean;
  chosenBoxIndex: number | null;
}
