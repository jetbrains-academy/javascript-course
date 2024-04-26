Before this, all the variables we declared were accessible for use. But that's not always the case. Let's discuss variable scopes. Scope determines the accessibility (visibility) of variables.
JavaScript have 3 types of scope:
- Global scope
- Block scope
- Function scope

### Global scope
All variables we declared before were global. All other scripts and functions can access these variables.
```
let x = 10
console.log(x)
```

### Block scope
JavaScript provides the ability to declare variables with let or const within a block bounded by parentheses and they will only be accessible within that block.
```
let a = 10
let b = 20
{
    console.log(b) // can access to variable from global scope
    let a = 123 // can declare new variable with block scope with the same name
    console.log(a)
    let c = 30
    console.log(c)
}
console.log(a) // x from the global scope stays the same
console.log(c) // can NOT access to variable from the block
```

### Function scope
It's very much like a block scope. Each function creates its own new scope.
```
function func() {
    let sum = 321
    console.log(sum)
}
```

### Task
Remove lines that cause errors from the program
