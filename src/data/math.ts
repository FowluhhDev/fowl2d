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

    normalized():Vec2 {
        let normalizer = Math.sqrt(this.x * this.x + this.y * this.y)
        if (normalizer === 0) {
            return new Vec2(0, 0);
        }
        return new Vec2(this.x / normalizer, this.y / normalizer);
    }
}

export function lerp(start_value: number, end_value: number, time: number) {
    return start_value + (end_value - start_value) * time
}