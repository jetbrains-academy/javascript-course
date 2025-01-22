class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    getVehicleInfo() {
        return this.brand + " " + this.year;
    }
}

class Truck extends Vehicle {
    constructor(brand, year, payload) {
        super(brand, year);
        this.payload = payload;
    }

    getPayload() {
        return this.payload;
    }
}

let truck = new Truck("Ford", 2015, 7500);
console.log(truck.getVehicleInfo());  // Ford 2015
console.log(truck.getPayload());     // 7500
