import { StateManager } from "../class/state/stateManager";
import type { State } from "../class/state/state";

let now;
let then = performance.now();
let delta;

export function initEngine(baseScene: State, pixelated:boolean = false) {
  let canvas = document.querySelector("#app") as HTMLCanvasElement;
  let ctx = canvas!.getContext("2d")!;
  window.ctx = ctx;

  let manager = new StateManager();
  window.manager = manager;
  manager.switch(baseScene);

  window.ctx.imageSmoothingEnabled = !pixelated;

  requestAnimationFrame(gameLoop);
}

function gameLoop() {
  let interval = 1000 / 60;

  now = performance.now();
  delta = now - then;

  if (delta > interval) {
    then = now - (delta % interval);

    if (getManager().scene === undefined) alert("BAD");
    else getManager().scene.preUpdate(delta/1000);
  }

  requestAnimationFrame(gameLoop);
}

export function getManager() {
  return window.manager;
}
