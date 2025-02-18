// base class for a game object

import { Vec2 } from "../../data/math";
import { Basic } from "./basic";

export class GameObject extends Basic {
    size:Vec2;

    visible:boolean = true;
    
    constructor(position:Vec2, size:Vec2) {
        super(position);

        this.size = size;
    }

    canDraw() {
        if (this.exists) {
            if (this.visible) {
                return true;
            }
        }
    }
    
    draw() {}
}

