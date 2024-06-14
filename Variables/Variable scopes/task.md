Up until now, all the variables we declared were accessible for use. However, that's not always the case. Let's discuss variable scopes. Scope determines the accessibility (visibility) of variables.
JavaScript has 3 types of scope:
- Global scope
- Block scope
- Function scope

### Global scope
All variables we declared earlier were global, meaning they can be accessed by all other scripts and functions.
```
let x = 10
console.log(x)
```

### Block scope
JavaScript allows the declaration of variables with `let` or `const` within a block delimited by curly braces, making them accessible only within that block.
```
let a = 10
let b = 20
{
    console.log(b) // can access variable from the global scope
    let a = 123 // you can declare a new variable with block scope using the same name
    console.log(a)
    let c = 30
    console.log(c)
}
console.log(a) // `a` from the global scope stays the same
console.log(c) // cannot access variable from the block scope
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
There are some lines in the given program that cause errors when executed because they use variables that are not available in their scopes.
Remove these error-causing lines.

<div class="hint">
  There are only two such lines.
</div>

