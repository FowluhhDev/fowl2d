import { GameObject } from "../types/object";
import { Vec2 } from "../../data/math";
import { Font } from "./font";

export class TextLabel extends GameObject {
  font: Font;
  color: string;
  text: string;
  constructor(text: string, position:Vec2, color: string, font: Font) {
    super(position, new Vec2(0, 0));
    this.font = font;
    this.color = color;
    this.text = text;
  }

  draw() {
    window.ctx.fillStyle = this.color;
    window.ctx.font = this.font.getMerged();
    window.ctx.fillText(this.text, this.position.x, this.position.y + (this.font.getSize() - 10));
  }
}
