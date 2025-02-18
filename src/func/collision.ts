import { CollisionSides } from "../data/collisionSides";
import type { GameObject } from "../class/types/object";

export function getCollision(
  obj1: GameObject,
  obj2: GameObject
) {
  if (
    obj1.position.x < obj2.position.x + obj2.size.x &&
    obj1.position.x + obj1.size.x > obj2.position.x &&
    obj1.position.y < obj2.position.y + obj2.size.y &&
    obj1.position.y + obj1.size.y > obj2.position.y
  ) {
    return true;
  } else {
    return false;
  }
}
export function getCollisionSide(
  obj1: GameObject,
  obj2: GameObject,
) {
  if (getCollision(obj1, obj2)) {
    var obj1HalfW = obj1.size.x / 2;
    var obj1HalfH = obj1.size.y / 2;
    var obj2HalfW = obj2.size.x / 2;
    var obj2HalfH = obj2.size.y / 2;
    var obj1CenterX = obj1.position.x + obj1.size.x / 2;
    var obj1CenterY = obj1.position.y + obj1.size.y / 2;
    var obj2CenterX = obj2.position.x + obj2.size.x / 2;
    var obj2CenterY = obj2.position.y + obj2.size.y / 2;

    var diffX = obj1CenterX - obj2CenterX;
    var diffY = obj1CenterY - obj2CenterY;

    var minXDist = obj1HalfW + obj2HalfW;
    var minYDist = obj1HalfH + obj2HalfH;

    var depthX = diffX > 0 ? minXDist - diffX : -minXDist - diffX;
    var depthY = diffY > 0 ? minYDist - diffY : -minYDist - diffY;

    if (depthX != 0 && depthY != 0) {
      if (Math.abs(depthX) < Math.abs(depthY)) {
        if (depthX > 0) {
          return CollisionSides.LEFT;
        } else {
          return CollisionSides.RIGHT;
        }
      } else {
        if (depthY > 0) {
          return CollisionSides.BOTTOM;
        } else {
          return CollisionSides.TOP;
        }
      }
    }
  }
}