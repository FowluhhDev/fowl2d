import { canvas } from "../../data/canvas";
import { GameObject } from "../types/object";
import { Vec2 } from "../../data/math";

export class Camera extends GameObject {
    lastX: any;
    lastY: any;
    lock: boolean = false;
    lockObject: any;
    constructor(position:Vec2) {
      super(position, new Vec2(0, 0));
    }
  
    draw() {
      window.ctx.resetTransform();
      if (this.lock) {
        window.ctx.translate(-((this.lockObject.position.x + (this.lockObject.size.x / 2)) - canvas().width / 2), -((this.lockObject.position.y + (this.lockObject.size.y / 2)) - canvas().height / 2));
      } else {
        window.ctx.translate(-this.position.x, -this.position.y);
      }
    }

    follow(object:any) {
        this.lastX = this.position.x;
        this.lastY = this.position.y;
        this.lockObject = object;
        this.lock = true;
    }

    unfollow() {
        this.position.x = this.lastX;
        this.position.y = this.lastY;
        this.lock = false;
    }
  }
  