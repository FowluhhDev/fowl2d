import { Vec2 } from "../data/math";
import { controller, mouseController } from "../data/controller";

export function getKeys(keys: any[]) {
  return keys.some((key: string | number) => controller[key].down == true);
}

export function getKeyValue(key: string) {
  if (controller[key].down) {
    return 1;
  } else {
    return 0;
  }
}

export function getMouseKeys(keys: any[]) {
  return keys.some((key: string | number) => mouseController[key].down == true);
}

export function getMousePos(canvas:HTMLCanvasElement, event:any) {
  var rect = canvas.getBoundingClientRect();
  return new Vec2(event.clientX - rect.left, event.clientY - rect.top);
}