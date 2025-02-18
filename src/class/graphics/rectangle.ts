import { GameObject } from "../types/object";
import type { Vec2 } from "../../data/math";

export class RectangleShape extends GameObject {
  color: string;
  constructor(position:Vec2, size:Vec2, color: string) {
    super(position, size);
    this.color = color;
  }

  draw() {
    window.ctx.fillStyle = this.color;
    window.ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
