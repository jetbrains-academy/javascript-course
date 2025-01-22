We remember that variables can be represented as boxes. The name of the variable is a sticker on the box, and the value is what is stored inside. 
There is nothing stopping us from putting the value of one box to another, i.e. we can assign to a variable the value of another variable.

```
let greeting = 'Hello!';
let morning = 'Good morning!';
let evening = 'Good evening!';
console.log(greeting); // Prints 'Hello!'

greeting = morning;
console.log(greeting); // Prints 'Good morning!'

greeting = evening;
console.log(greeting); // Prints 'Good evening!'
```

### Comments
Programmers can add comments to a program. This is a text that does not affect the program in any way but helps understand how it works.
Comments in JavaScript start with the characters `//`:
```javascript
// This is a comment
// console.log("This instruction is commented and will not be executed");
```

### Semicolon
In JavaScript, as in some other programming languages, instructions end with a semicolon (`;`).
Although omitting it is not an error in JavaScript, we will include it for consistency.

### Good to know
In older programs, you may encounter the use of `var` instead of `let`. This is a somewhat “outdated” style nowadays. Although there is a small difference between `let` and `var`, it doesn't matter to us yet.
```
var message = 'Hello!';
```
The main thing to remember is to use let to declare variables. If you're still very interested in digging deeper into the difference, read [here](https://javascript.info/var). 

### Task
Declare a variable named `deliveryAddress` and assign it the value of the variable named `harryAddress`
