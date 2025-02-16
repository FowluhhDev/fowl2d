import type { State } from "../class/state/state";
import { initEngine } from "./init";

export function startGame(defaultScene: State) {
  console.log("Fowl2D v1.1 - FowluhhDev, Me1ad, and Kat21");
  
  initEngine(defaultScene);
}
