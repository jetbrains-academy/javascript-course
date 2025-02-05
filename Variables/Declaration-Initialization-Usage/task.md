Before we will talk about hoisting let's discuss a little about the lifecycle in JavaScript using the variable as an example.
```
Declaration -> Initialization -> Usage
```

```
let a; // Declaration
a = 123; // Initialization
console.log(a); // Usage
a = 321; // Usage because a is already initialized
```

Declaration and Initialization can be performed in the same time
```
let a = 123; // Declaration + Initialization
```

What happens if we try to use an undeclared variable or function? We will get an error:
```
console.log(b); // ReferenceError: b is not defined
```

In this case, if the variable has been explicitly declared, there will be no more error, but the value of the variable will be undefined:
```
let b;
console.log(b); // undefined
```

### Task
Fix the program so that it prints the number 123 on the screen
