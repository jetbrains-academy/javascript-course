Not always attributes or methods are bound to specific objects. 
Sometimes this piece of functionality belongs to the class as a whole, in which case we can declare it using the `static` keyword. 

The main differences are that to refer to these methods and attributes, we use the class name rather than the object name. 
For example, we may want to add to our `Vehicle` class information about what units of measurement we will use in our program when dealing with vehicles. 
We may also want a method that returns an array of basic vehicle types. 
Both of these are not specific to a particular vehicle but are common to all objects of this class.

Note that static attributes are **not** accessible from instance objects because they are not object's attributes.

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
        // in static methods, `this` refer to an class, not the object instance
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
Add a static property `coordinateSystem` with the value `"cartesian"` for the `Point` class.
