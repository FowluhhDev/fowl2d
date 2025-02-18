import { getCollision } from "../../func/collision";
import { GameObject } from "../types/object";
import { Vec2 } from "../../data/math";
import { Group } from "./group";
import { Sprite } from "./sprite";

export class TileMap extends GameObject {
  data: any;
  offsetX: number;
  offsetY: number;
  tileSize: any;
  tilePaths: string[];
  constructor(data: any, tileSize: any, offsetX = 0, offsetY = 0) {
    super(new Vec2(offsetX, offsetY), new Vec2(0, 0));
    this.data = data;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.tileSize = tileSize;
    this.tilePaths = [];
  }

  addTile(path: string) {
    this.tilePaths.push(path);
  }

  draw() {
    var tileGroup = new Group(new Vec2(this.offsetX, this.offsetY));
    for (let y = 0; y < this.data.length; y++) {
      const row = this.data[y];
      for (let x = 0; x < row.length; x++) {
        const tile = this.data[y][x];
        var tileImage = new Sprite(
          this.tilePaths[tile],
          new Vec2(x * this.tileSize, y * this.tileSize)
        );
        tileGroup.add(tileImage);
      }
    }
    tileGroup.draw();
  }

  getCollision(obj1: GameObject, tileX: number, tileY: number) {
    let tile = new GameObject(
      new Vec2(tileX * this.tileSize + this.offsetX, tileY * this.tileSize + this.offsetY),
      new Vec2(this.tileSize, this.tileSize)
    )
    return getCollision(
      obj1,
      tile
    );
  }
}