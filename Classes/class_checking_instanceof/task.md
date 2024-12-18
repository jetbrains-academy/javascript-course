In [Data Types](course://Data Types/typeof_operator) lesson we used `typeof` to determine which data type we were dealing with. 

```javascript
let a = 123
console.log(typeof a)  // number
```

But `typeof` works for primitives, and for objects of any class it only tells us that it is of type `Object`.

```javascript
class Employee {
    constructor(name) {
        this.name = name;
    }
}

class Professor extends Employee {
    constructor(name, researchArea) {
        super(name);
        this.researchArea = researchArea;
    }
}

let professor = new Professor("John", "Computer Science");
let employee = new Employee("Tomas");

console.log(typeof employee);   // object
console.log(typeof professor);  // object
```

This is of course correct, but we may want to get more detailed information about the object we are working with. 
For this purpose, we can use the `instanceof` operator. It allows us to check whether the specified object belongs to a certain class or its parent classes.

```javascript
console.log(professor instanceof Employee)   // true
console.log(professor instanceof Professor)  // true

console.log(employee instanceof Employee)    // true
console.log(employee instanceof Professor)   // false
```

Although most often object-oriented programs allow you to use objects of a child class instead of objects of the parent class by 
overriding the necessary methods, using `instanceof` is possible to implement some of the checks the programmer needs.

You can read more about `instanceof` operator [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof).

### Task
This time you are given a chain of classes. The `Professor` class is a child of the `Employee` class, and the `LabHead` class is a child of the `Professor` class.

You also have the `professorsPresenter` function. Its task is to present professors (`LabHeads` are also professors, as we can see from the class inheritance chain).

You need to implement:
1. The `intro` method for the `LabHead` class, appending the result of the `intro` method from the `Professor` class with the string `"Head of <labName> lab."`.
2. The `professorsPresenter` function so that it returns the value of the `intro` method for objects of the `Professor` and its child classes, and returns `null` for objects of all other classes.
