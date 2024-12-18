Inheritance may require not only adding new functionality, but also replacing or reusing existing functionality. 
For example, changing the behavior of some methods of the parent class. Let's continue our example with the professor from the previous task.

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


Thus, we _override_ the `intro()` method in the child class. Since when we call this method on an object of a `Professor` class, 
the attribute lookup is first performed on the child class and then on the parent class, we can override the methods by changing their behavior.

Often we don't need to change the entire behavior of a method, but only add something. 
To do this, we need to call the method of the parent class. This can be done using the `super` keyword.

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

This approach is certainly preferable since it avoids code duplication.

### Task
We will practice method overriding using the example of the already known `Point` class. 
Imagine that you need to implement the `Point3D` class, which is a child of the `Point` class. 
However, for the three-dimensional case, the implementation of `distanceFromOrigin` from the `Point` class is no longer suitable.

Complete the program by implementing the constructor and overriding the `distanceFromOrigin` method for the `Point3D` class. 
You can use [the following formula](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Distance_between_two_points) to calculate distance for 3D case.
