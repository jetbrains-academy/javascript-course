class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceFromOrigin() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let p1 = new Point(3, 4);
let p2 = new Point(42, 56);

console.log(p1.distanceFromOrigin());  // 5
console.log(p2.distanceFromOrigin());  // 70
