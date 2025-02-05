Before this, all the variables we declared were accessible for use. But that's not always the case. Let's discuss variable scopes. Scope determines the accessibility (visibility) of variables.
JavaScript have 3 types of scope:
- Global scope
- Block scope
- Function scope

### Global scope
All variables we declared before were global. All other scripts and functions can access these variables.
```
let x = 10;
console.log(x);
```

### Block scope
JavaScript allows you to declare variables using `let` or `const` within a block enclosed by curly braces, and those variables will only be accessible within that block.
```
let a = 10;
let b = 20;
{
    console.log(b); // can access the variable from the global scope
    let a = 123; // can declare a new variable with block scope using the same name
    console.log(a);
    let c = 30;
    console.log(c);
}
console.log(a); // a from the global scope stays the same
console.log(c); // CANNOT access the variable from the block scope
```

### Function scope
It's very much like a block scope. Each function creates its own new scope.
```
function func() {
    let sum = 321;
    console.log(sum);
}
```

### Task
There are some lines in the given program that cause errors when executing. They use variables that are not available in their scopes.
Remove the lines that cause errors.

<div class="hint">
  There are only two such lines
</div>

