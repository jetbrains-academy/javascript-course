Since a variable is a signed box with some data, we can put new data into it, including data from another box. That is, we can assign to a variable the value of another variable.

```
let greeting = 'Hello!'
let morning = 'Good morning!'
let evening = 'Good evening!'
console.log(greeting) // Prints 'Hello!'

greeting = morning
console.log(greeting) // Prints 'Good morning!'

greeting = evening
console.log(greeting) // Prints 'Good evening!'
```

### Comments
Programmers can add comments to a programme. This is an any text that does not affect the programme in any way, but helps to understand how it works.
Comments in JavaScript start with the characters `//`

### Good to know
In older programs, you may encounter the use of `var` instead of `let`. This is a somewhat “outdated” style nowadays. Although there is a small difference between `let` and `var`, it doesn't matter to us yet.
```
var message = 'Hello!';
```
The main thing to remember is to use let to declare variables. If you're still very interested in digging deeper into the difference, read [here](https://javascript.info/var). 

### Task
Declare a variable named `deliveryAddress` and assign it the value of the variable named `harryAddress`
