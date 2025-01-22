As you may have noticed from the [previous lesson](course://Objects_Advanced_patterns), we often need to create objects of the same type.
The _object-oriented_ approach to programming is built around this concept.

> In _object-oriented programming_, a _class_ is an extensible program code template for creating objects, 
> providing initial values for state (class attributes) and implementations of behavior (class methods).

In essence, a class describes how objects should look, what they should do, and what properties they should have.
You can think of a class as a blueprint and an object as a part made in strict accordance with that blueprint.

```javascript
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    intro() {
        return "I'm " + this.name + ".";
    }
};

let emily = new Employee("Emily Taylor", "Planning");
let tom = new Employee("Tom Brown", "Marketing");

console.log(emily.intro());  // I'm Emily Taylor.
console.log(tom.intro());    // I'm Tom Brown.
console.log(tom.department);  // Marketing
```

In this example, we declared the `Employee` class and created two objects of this class using the `new` keyword.
While this approach may seem similar to how we worked with objects before, it is important to note the following:
* No objects were created at the time the class was declared. In this example, only two objects — `emily` and `tom` — are created. 
  Each of these objects has its own `name` and `department` fields.
* The `constructor` is a special method that is automatically called when an object is created.
  Its role is to initialize the object's attributes. The constructor can take any number of parameters (or none at all),
  depending on how the programmer defines it.
* Just as we declare methods within an object, in class methods, we can use the `this` keyword to refer to the object’s attributes.
* Object attributes and methods can be accessed directly using the dot operator (e.g., `tom.department`).

You can read more about classes in JavaScript [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

### Task
You are given an incomplete `Point` class designed to store a point's coordinates in the [Cartesian coordinate system](https://en.wikipedia.org/wiki/Cartesian_coordinate_system).
Your task is to complete the following:
1. The `constructor` method, which saves the coordinates into the attributes of the created object.
2. The `distanceFromOrigin` method, which determines the distance to the coordinate system's center. You can use [this formula](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Distance_between_two_points) to calculate the distance.

Note: use the `Math.sqrt()` method to calculate the square root:
```javascript
console.log(Math.sqrt(144))  // 12
```
