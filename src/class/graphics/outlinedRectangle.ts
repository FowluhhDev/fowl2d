import { GameObject } from "../types/object";
import type { Vec2 } from "../../data/math";

export class OutlinedRectangleShape extends GameObject {
  color: string;
  outline_color: string;
  outline_width: number;

  constructor(
    position:Vec2,
    size:Vec2,
    color: string,
    outline_color: string,
    outline_width: number
  ) {
    super(position, size);
    this.color = color;
    this.outline_color = outline_color;
    this.outline_width = outline_width;
  }

  draw() {
    window.ctx.fillStyle = this.outline_color;
    window.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.x + this.outline_width,
      this.size.y + this.outline_width
    );
    window.ctx.fillStyle = this.color;
    window.ctx.fillRect(
      this.position.x + this.outline_width,
      this.position.y + this.outline_width,
      this.size.x - this.outline_width,
      this.size.y - this.outline_width
    );
  }
}
