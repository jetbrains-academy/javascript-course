class Point{

    static coordinateSystem = "cartesian";

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Point3D extends Point{
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}

console.log(Point.coordinateSystem);    // cartesian
console.log(Point3D.coordinateSystem);  // cartesian
