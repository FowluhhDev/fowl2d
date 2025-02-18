import { GameObject } from "../types/object";
import { Vec2 } from "../../data/math";

export class SlicedSprite extends GameObject {
  src: any;
  scale: number;
  img: HTMLImageElement;
  sx: any;
  sy: any;
  sw: any;
  sh: any;
  constructor(
    src: any,
    position:Vec2,
    size:Vec2,
    sx: any,
    sy: any,
    sw: any,
    sh: any,
    scale = 1
  ) {
    super(position, size);
    this.src = src;
    this.scale = scale;
    this.img = new Image();
    this.sx = sx;
    this.sy = sy;
    this.sw = sw;
    this.sh = sh;
  }

  draw() {
    this.img.src = this.src;
    window.ctx.drawImage(
      this.img,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.position.x,
      this.position.y,
      this.size.x*this.scale,
      this.size.y*this.scale
    );
  }
}
