export class Vec2 {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    dot(other: Vec2) {
        return (this.x * other.x) + (this.y * other.y)
    }

    cross(other: Vec2) {
        return (this.x * other.y) - (other.x * this.y)
    }
}

export function lerp(start_value: number, end_value: number, time: number) {
    return start_value + (end_value - start_value) * time
}