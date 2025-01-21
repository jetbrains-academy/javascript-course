Class *inheritance* allows you to create a new class that extends the functionality of an existing one.
In essence, it is very similar to [Prototypal inheritance](course://Objects_Advanced_patterns/Prototypal_inheritance) in objects.

<div class="hint" title="Class and prototypal inheritance">

  The class inheritance mechanism actually relies on prototypal inheritance. We won't go into the details here, but if you're interested, you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
</div>

Let's continue with our example of employees from the previous task. Suppose we want to describe a professor who is an employee of a university.

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

To create a class `Professor` that inherits from `Employee`, we use the `extends` keyword when declaring the class.
To describe the relationship between these classes, we can say that `Professor` is a _child_ class, while `Employee` is a _parent_ class.
In the inheriting class, we can declare any additional attributes and methods as needed. However, special attention should be given to the constructor.

When creating an object of the `Professor` class, we need to provide values for the fields `name` and `department`, which belong to the `Employee` class,
as well as the value for `researchArea`, which is specific to the `Professor` class. As a result, the constructor of the `Professor` class must take all three values.

Each class's constructor is responsible for correctly initializing its own fields. The constructor of the `Professor` class
initializes the fields specific to `Professor`, while the constructor of the `Employee` class
initializes its own fields. To achieve this, the `Professor` constructor explicitly calls the `Employee` constructor using the `super` keyword.

You must always call the base class constructor using `super` within the child class constructor.
Importantly, this call must occur **before** using `this` inside the constructor.

<div class="hint" title="Default constructor">

  If we don't define a constructor for the `Professor` class, JavaScript will automatically create a default constructor for us.
  In fact, this default constructor simply passes all arguments to the parent class's constructor.

  ```javascript
  class Professor extends Employee {
  }

  let professor = new Professor("Scott Williams", "Labs");

  console.log(professor.intro());       // I'm Scott Williams.
  console.log(professor.department);    // Labs
  ```
</div>

You can read more about inheritance in JavaScript [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#inheritance) and in more details [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

### Task
You are given a `Vehicle` class, which stores information about the brand and year of a vehicle and includes
a method that generates a string with this information.
You also have a `Truck` class, which inherits from the `Vehicle` class and stores information about the truck's payload.

Your task is to complete the program by implementing the constructor for the `Truck` class and adding a method that returns the payload value.
