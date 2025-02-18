import { GameObject } from "../types/object";
import { Vec2 } from "../../data/math";

export class Sprite extends GameObject {
  src: string;
  scale: number = 1;
  img: HTMLImageElement;
  constructor(src: string, position:Vec2, scale = 1) {
    super(position, new Vec2(0, 0));
    this.src = src;
    this.scale = scale;
    this.img = new Image();
  }

  draw() {
    this.img.src = this.src;
    this.size.x = this.img.width * this.scale;
    this.size.y = this.img.height * this.scale;
    window.ctx.drawImage(this.img, this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
