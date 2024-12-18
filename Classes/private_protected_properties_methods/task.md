Object-oriented programming has another advantage: it allows you to hide the specifics of method implementation. 
This allows the programmer to define an _interface_ – the expected way of interacting with objects of a class.

Suppose we store the mileage of a car in some property. Now nothing prevents this field from being accidentally decreased or 
even taking a negative value, although by the logic of the class such a thing is impossible. 

```javascript
class Vehicle {
    constructor(model, mileage) {
        this.model = model;
        this.mileage = mileage;
    }
}

let car = new Vehicle("Audi A4", 98000);

car.mileage = -12000;      // breaks the logic
console.log(car.mileage);  // -12000
```


Properties `model` and `mileage` are _public,_ and it is possible to change their value any way you want by accessing these fields directly. 
To add more control over changing these fields, JavaScript supports _private_ and emulation of _protected_ fields and methods.

### Protected properties
Protected properties are accessible only from class methods and methods of inheriting classes.
Although protected fields are not supported at the language level, in JavaScript programmers can use some workaround to emulate them.

By convention protected fields are named starting with underscore (`_`).

```javascript
class Vehicle {
    constructor(model, mileage) {
        this.model = model;
        this._mileage = mileage;  // _mileage now is "protected" property
    }
    set mileage(value) {
        if (value >= this._mileage) {
            this._mileage = value;
        }
    }
    get mileage() {
        return this._mileage;
    }
}

let car = new Vehicle("Audi A4", 4300);
car.mileage = 27000
car.mileage = -12000;      // doesn't break anything
console.log(car.mileage);  // 27000
car._mileage = 10          // still possible to access directly 
console.log(car.mileage);  // 10
```

Now the mileage field is accessed only through getter and setter, which can control the modification of this field as it is required to preserve object consistency. 
Formally, it is still possible to break these restrictions, but you shouldn't do that 🙂.

### Private properties
JavaScript supports private properties and methods at the language level. Access to such properties is available only from methods of this class. 
Inherited classes also cannot access private fields or methods directly. The names of private fields must begin with `#`.

```javascript
class Vehicle {
    #mileage;  // private field declaration
    constructor(model, mileage) {
        this.model = model;
        this.#mileage = mileage;
    }
    set mileage(value) {
        if (value >= this.#mileage) {
            this.#mileage = value;
        }
    }
    get mileage() {
        return this.#mileage;
    }
}

let car = new Vehicle("Audi A4", 4300);
car.mileage = 27000
car.mileage = -12000;      // doesn't break anything
console.log(car.mileage);  // 27000
car.#mileage = 10          // error
```

Since child classes can't access private fields either, to leave this possibility, most often protected fields are used.

<div class="hint">

  All of the above is true for methods as well, but for briefness we will not pay much attention to it now.

  ```javascript
  class Measurement{
      constructor(meters){
          this.meters = meters;
      }

      #toCentimeters(){
          return this.meters * 100;
      }

      getCentimeters(){
          return this.#toCentimeters();
      }
  }

  let height = new Measurement(1.8);
  console.log(height.getCentimeters());  // 180
  ```
</div>

You can read more about private and protected properties and methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties).

### Task
You are given the `Vehicle` class, which for simplicity has only a property representing the current fuel level in the tank. 
There is also a static field `fuelCapacity`, which defines the volume of the fuel tank.

You need to implement setter and getter methods for the `_fuel` property. In setter, you need to check before the `_fuel` modifying 
that the new value is greater than or equal to zero and less than or equal to the value of `fuelCapacity`.
If the condition is not met, there is no need to change the fuel level.
