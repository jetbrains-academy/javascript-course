Object-oriented programming offers another advantage: it allows you to hide the specifics of method implementation. 
This allows the programmer to define an _interface_ – the expected way of interacting with objects of a class.
In simple programs, this might seem redundant, but in large projects, such solutions significantly improve maintenance and help prevent accidental misuse.

For example, suppose we store the mileage of a car in a property. There's nothing to prevent this field from being accidentally decreased or
even assigned a negative value, which would contradict the logic of the class. 

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


The `model` and `mileage` properties are _public,_ meaning their values can be changed freely by directly accessing these fields.
To provide more control over modifying these fields, JavaScript supports _private_ fields and offers ways to emulate _protected_ fields and methods.

### Protected properties
Protected properties are accessible only through class methods and methods of inheriting classes.
Although JavaScript does not natively support protected fields at the language level, programmers can use workarounds to emulate them.

By convention, protected fields are named with a leading underscore (`_`).

```javascript
class Vehicle {
    constructor(model, mileage) {
        this.model = model;
        this._mileage = mileage;  // _mileage is now a "protected" property
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
car.mileage = 27000;
car.mileage = -12000;      // doesn't break anything
console.log(car.mileage);  // 27000
car._mileage = 10;          // still possible to access directly 
console.log(car.mileage);  // 10
```

The `mileage` field is now accessed exclusively through a getter and setter, which ensures that any modifications to this field adhere to the requirements for maintaining object consistency.
While it is technically still possible to bypass these restrictions, you really shouldn't do that 🙂.

### Private properties
JavaScript supports private properties and methods at the language level. These can only be accessed from within the methods of the same class.
Even inherited classes cannot directly access private fields or methods. Private field names must begin with `#`.

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
car.mileage = 27000;
car.mileage = -12000;      // doesn't break anything
console.log(car.mileage);  // 27000
car.#mileage = 10;          // error
```

Child classes can't access the private fields of a parent class, which can be useful in certain cases. Therefore, programmers most often prefer using **protected** fields instead.

<div class="hint">

  All of the above also applies to methods, but for the sake of brevity, we will not focus on that for now.

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
You are given the `Vehicle` class, which, for simplicity, includes only a property representing the current fuel level in the tank.
There is also a static field, `fuelCapacity`, which specifies the maximum capacity of the fuel tank.

Your task is to implement setter and getter methods for the `_fuel` property. In the setter, before modifying `_fuel`, you must ensure
that the new value is greater than or equal to zero and does not exceed the `fuelCapacity`.
If this condition is not met, the fuel level should remain unchanged.
