class Vehicle {
    static fuelCapacity = 70;

    constructor(fuelAmount) {
        this._fuel = fuelAmount;
    }

    set fuel(value) {
        if (value >= 0 && value <= Vehicle.fuelCapacity) {
            this._fuel = value;
        }
    }

    get fuel() {
        return this._fuel;
    }
}

let car = new Vehicle(35)

car.fuel = 75
car.fuel = -10
console.log(car.fuel) // 35

car.fuel = 70
console.log(car.fuel) // 70

Vehicle.fuelCapacity = 100
car.fuel = 75
console.log(car.fuel) // 75
