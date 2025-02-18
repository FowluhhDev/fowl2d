import { GameObject } from "../types/object";
import { Vec2 } from "../../data/math";

export class Group extends GameObject {
  objects: Array<GameObject>;
  constructor(position:Vec2) {
    super(position, new Vec2(0, 0));;

    this.objects = [];
  }

  draw() {
    for (let key in this.objects) {
      if (this.objects[key].canDraw()) {
        this.objects[key].position.x += this.position.x;
        this.objects[key].position.y += this.position.y;

        this.objects[key].draw();

        this.objects[key].position.x -= this.position.x;
        this.objects[key].position.y -= this.position.y;
      }
    }
  }

  add(object: GameObject, callback = () => {}) {
    callback();
    this.objects.push(object);
  }
}

