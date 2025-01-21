Inheritance may involve not only adding new functionality but also modifying or reusing existing functionality.
For example, it might require changing the behavior of certain methods in the parent class. Let's continue with our example of the professor from the previous task.

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

class Professor extends Employee {
    constructor(name, department, researchArea) {
        super(name, department);
        this.researchArea = researchArea;
    }

    intro() {
        return "I'm " + this.name + ". Professor in " + this.department + " department.";
    }
}

let professor = new Professor("Scott Williams", "Labs", "Robotics");

console.log(professor.intro());
// I'm Scott Williams. Professor in Labs department.
```


Thus, we _override_ the `intro()` method in the child class. When this method is called on an object of the `Professor` class,
the attribute lookup is first performed in the child class and then in the parent class. This allows us to override methods by modifying their behavior.

Often, we don't need to completely change a method's behavior but simply add something to it.
To achieve this, we can call the method from the parent class using the `super` keyword.

```javascript
class Professor extends Employee {
    constructor(name, department, researchArea) {
        super(name, department);
        this.researchArea = researchArea;
    }

    intro() {
        return super.intro() + " Professor in " + this.department + " department.";
    }
}

let professor = new Professor("Scott Williams", "Labs", "Robotics");

console.log(professor.intro());
// I'm Scott Williams. Professor in Labs department.
```

This approach is certainly preferable, as it avoids code duplication.

### Task
We will practice method overriding using the example of the already familiar `Point` class. 
Imagine that you need to implement the `Point3D` class, which is a child of the `Point` class.
However, in the three-dimensional case, the implementation of the `distanceFromOrigin` method from the `Point` class is no longer suitable.

Complete the program by implementing the constructor and overriding the `distanceFromOrigin` method for the `Point3D` class. 
You can use [this formula](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Distance_between_two_points) to calculate the distance for the 3D case.
