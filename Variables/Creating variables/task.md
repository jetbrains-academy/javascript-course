## Creating variables
Most of the time, a JavaScript application needs to work with information. This can be, for example, information about some product in an online shop. In order to work with this in our program we need variables.

A variable is a "named storage" for the data. You can imagine it as a box on a bookshelf. The box stores the data, and the box has a sticker on it so that you don't forget what you kept in the box.

To create a variable in JavaScript, use the let keyword. `let` is a special keyword in the JavaScript language. We will meet many other keywords in the future.

Let's create variable greeting. This kind of variable creation is called "declaration" in programming languages:
```
let greeting;
```

To write a value to the greeting variable, we use the `=` operator:
```
greeting = 'Hello';
```
We can imagine that we put the text 'Hello' in a box with a 'greeting' sticker on it.

We can change the value of a variable as many times as we want during the program. Moreover, we can combine variable declaration and assignment:
```
let greeting = 'Hello';
```

Finally, let's learn how to see what is stored inside a variable. To do this, let's use the `console.log` function built into JS. It will display the value of the variable whose name we will give it
```
console.log(greeting)
```

### Task
Modify the program so that it displays the word "JavaScript" on the screen
