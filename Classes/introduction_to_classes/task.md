As you may have noticed from the [previous lesson](course://Objects_Advanced_patterns), we may need to create objects of the same type quite often. 
And the _object-oriented_ approach to writing programs relies on it.

> In _object-oriented programming_, a _class_ is an extensible program-code-template for creating objects, 
> providing initial values for state (class attributes) and implementations of behavior (class methods).

Thus, a class is actually a description of how objects should look like, what they should do, and what properties they should have. 
You can think of a class as a blueprint, and an object as a part made in strict accordance with the blueprint.

```javascript
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    intro() {
        return "I'm " + this.name + ".";
    }
}

let emily = new Employee('Emily Taylor', 'Planing');
let tom = new Employee('Tom Brown', 'Marketing');

console.log(emily.intro());  // I'm Emily Taylor.
console.log(tom.intro());    // I'm Tom Brown.
console.log(tom.department)  // Marketing
```

In this example, we have declared the `Employee` class, and created two objects of this class using the `new` keyword. 
Although this is somewhat similar to the way we worked with objects before, it is important to pay attention to the following:
* No objects were created at the time the class was declared. In this example, two objects are created: `emily` and `tom`. 
  Each of these objects has its own `name` and `department` fields.
* `constructor` is a special method that is automatically called when an object is created. 
  The role of this method is to initialize the object's attributes. The constructor can have any number of parameters (or no parameters at all). 
  The programmer decides it himself.
* The same way as we declare methods inside objects declaration, in class methods we can also use this method to refer to object's attributes.
* We can also access object attributes and methods directly, using the dot operator (`tom.department`).

You can read more about classes in JavaScript [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

### Task
You are given an incomplete `Point` class. It is intended to store point's coordinates in the [Cartesian coordinate system](https://en.wikipedia.org/wiki/Cartesian_coordinate_system). 
You need to complete:
1. The `constructor` method, which save coordinates into the attributes of the created object.
2. The `distanceFromOrigin` method, which determines the distance to the coordinate system center. You can use [the following formula](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Distance_between_two_points) for this.

Note: use the `Math.sqrt()` method to calculate the square root:
```javascript
console.log(Math.sqrt(144))  // 12
```
