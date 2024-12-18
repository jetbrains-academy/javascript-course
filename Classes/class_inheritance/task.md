Class *inheritance* allows you to create a new class that extends the functionality of the old one. 
In fact, it is almost the same as [Prototypal inheritance](course://Objects_Advanced_patterns/Prototypal_inheritance) of Objects.

<div class="hint" title="Class and prototypal inheritance">

  Class inheritance mechanism actually uses prototypal inheritance. We won't go into this in detail, but if you're interested, you can read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
</div>

Let's continue our example with the employees from the previous task. Suppose we want to describe a professor who is an employee of a university.

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
}

let professor = new Professor("Scott Williams", "Labs", "Robotics");

console.log(professor.intro());       // I'm Scott Williams.
console.log(professor.department);    // Labs
console.log(professor.researchArea);  // Robotics
```

To create a class `Professor` that inherits from `Employee` we need to use the keyword `extends` when declaring the class. 
To indicate the relationship between the classes, we can say that `Professor` is a _child_ class and `Employee` is a _parent_ class. 
In the inheritor class, we can also declare any attributes and methods we want, but let's pay special attention to the constructor.

When creating an object of class `Professor` we need to know the fields `name` and `department`, as they are part of `Employee`, 
and also the value of `researchArea` needed only for the professor, so the constructor of class `Professor` takes all these three values.

Only the class constructor knows how to initialize it correctly, so the `Professor` class constructor is responsible only for 
initializing the fields belonging to the `Professor` class, and the `Employee` class constructor is responsible for 
initializing the fields belonging to the `Employee` class, which we need to explicitly call using the `super` keyword. 
It is important that this should be done **before** using `this` inside the constructor.

<div class="hint" title="Default constructor">

  If we don't define our own constructor for the `Professor` class, JavaScript will create a default constructor for us. 
  In fact, it just passes all arguments to the parent class constructor.

  ```javascript
  class Professor extends Employee {
  }

  let professor = new Professor("Scott Williams", "Labs");

  console.log(professor.intro());       // I'm Scott Williams.
  console.log(professor.department);    // Labs
  ```
</div>

You can read about inheritance in JavaScript [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#inheritance) and in more details [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

### Task
You are given the `Vehicle` class, which contains information about the brand and year of the vehicle, 
and a method that generates a string with this information. 
You also have a `Truck` class, which is an inheritor of the `Vehicle` class and contains information about the payload of the truck.

You need to complete the program by implementing a constructor of the `Truck` class, as well as a method that returns the payload value.
