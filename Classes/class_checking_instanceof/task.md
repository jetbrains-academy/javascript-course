In the [Data Types](course://Data Types/typeof_operator) lesson, we used `typeof` to determine the data type we were working with. 

```javascript
let a = 123;
console.log(typeof a);  // number
```

However, while `typeof` works for primitives, it only identifies objects of any class as being of type `Object`.

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

This is, of course, correct, but sometimes we may want more detailed information about the object we are working with.
For this purpose, we can use the `instanceof` operator, which allows us to check whether a specified object belongs to a particular class or one of its parent classes.

```javascript
console.log(professor instanceof Employee);   // true
console.log(professor instanceof Professor);  // true

console.log(employee instanceof Employee);    // true
console.log(employee instanceof Professor);   // false
```

Although object-oriented programs typically allow the use of child class objects in place of parent class objects by
overriding necessary methods, the `instanceof` operator can still be used to perform specific checks required by the programmer.

You can read more about the `instanceof` operator [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof).

### Task
This time, you are given a chain of classes: the `Professor` class is a child of the `Employee` class, and the `LabHead` class is a child of the `Professor` class.

Additionally, you have the `professorsPresenter` function, which is designed to present professors (`LabHead` is also considered a professor, as indicated by the class inheritance chain).

Your task is to implement the following:
1. The `intro` method for the `LabHead` class, which appends the result of the `intro` method from the `Professor` class with the string `"Head of <labName> lab."`.
2. The `professorsPresenter` function so that it:
    - Returns the result of the `intro` method for objects of the `Professor` class and its subclasses.
    - Returns `null` for objects of all other classes.
