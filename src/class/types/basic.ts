import type { Vec2 } from "../../data/math";

export class Basic {
    position:Vec2;

    exists:boolean = true;
    
    constructor(position:Vec2) {
        this.position = position;
    }

    kill() {
        this.exists = false;
    }
}

