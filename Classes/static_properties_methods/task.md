Attributes or methods are not always tied to specific objects.
Sometimes, a piece of functionality belongs to the class as a whole, in which case it can be declared using the `static` keyword. 

The key difference is that static methods and attributes are accessed using the class name rather than the object name.
For example, in our `Vehicle` class, we might want to include information about the units of measurement used in our program when dealing with vehicles.
Additionally, we might want to add a method that returns an array of basic vehicle types.
These attributes and methods are not specific to any particular vehicle but are shared across all objects of the class.

Note that static attributes are **not** accessible from instance objects, as they are not attributes of individual objects.

```javascript
class Vehicle {
    static UnitsOfMeasurement = "km";

    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    static getCommonVehicleTypes() {
        return ["SUV", "Sedan", "Hatchback", "Coupe", "Truck"];
    }
    
    static getUnitsOfMeasurement() {
        // in static methods, `this` refers to a class, not an object instance
        return this.UnitsOfMeasurement;
    }
}

class Truck extends Vehicle {
    constructor(brand, year, payload) {
        super(brand, year);
        this.payload = payload;
    }
}

console.log(Vehicle.UnitsOfMeasurement);  // km
console.log(Vehicle.getCommonVehicleTypes());
// [ 'SUV', 'Sedan', 'Hatchback', 'Coupe', 'Truck' ]
console.log(Truck.getCommonVehicleTypes());
// [ 'SUV', 'Sedan', 'Hatchback', 'Coupe', 'Truck' ]

let ford = new Vehicle("Ford", 2015);
console.log(ford.UnitsOfMeasurement);  // undefined!
```

Note that static attributes and methods are inherited.

You can read more about static attributes and methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static). 

### Task
Add a static property `coordinateSystem` with the value `"cartesian"` to the `Point` class.
