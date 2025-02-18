import { GameObject } from "../types/object";
import { Vec2 } from "../../data/math";
import type { Font } from "./font";

export class OutlinedTextLabel extends GameObject {
  font: Font;
  color: string;
  text: string;
  outline_color: string;
  outline_width: number;
  constructor(
    text: string,
    position:Vec2,
    color: string,
    outline_color: string,
    outline_width: number,
    font: Font
  ) {
    super(position, new Vec2(0, 0));
    this.font = font;
    this.color = color;
    this.text = text;
    this.outline_color = outline_color;
    this.outline_width = outline_width;
  }

  draw() {
    window.ctx.fillStyle = this.color;
    window.ctx.font = this.font.getMerged();
    window.ctx.strokeStyle = this.outline_color;
    window.ctx.lineWidth = this.outline_width * 2;
    window.ctx.strokeText(
      this.text,
      this.position.x,
      this.position.y + (this.font.getSize() - 10)
    );
    window.ctx.fillText(this.text, this.position.x, this.position.y + (this.font.getSize() - 10));
  }
}
