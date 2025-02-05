What if we try to refer to a variable that is not yet defined, but will be defined later in the program?
```
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 123;
```

You may notice this peculiarity. Despite the fact that, by the time `console.log()` is executed in both cases, `b` has not yet been declared, 
in the second case, the interpreter (the special program that executes our code) is aware of the variable `b`. This occurs due to Hoisting.

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

This also works with functions:

```
func();

function func() {
    console.log("Hello from func()");
}
```
Although func() has not yet been declared at the time of the func() call, thanks to hoisting, we can call it correctly

### Task
Put the variable declarations in the correct order. The program should print:
```
[func] a: 10
[func] b: 20
[global] a: 10
[global] b: 20
```
