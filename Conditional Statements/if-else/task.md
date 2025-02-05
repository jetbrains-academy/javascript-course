Previously, our programs followed a strict and straightforward sequence of commands.
However, in programming, this is usually not the case.
One of the superpowers of programming is the ability to perform different actions depending on the conditions and data encountered while the program is running.

This technique in programming is called _branching_, and the most basic operator that allows us to implement it is `if`. 
Its logic is very simple: if the condition in its parentheses is `true`, then the sequence of actions within its curly brackets is executed.

```js
let number = 28;
if (number % 2 === 0){
    // both next lines will be executed:
    console.log("number = " + number);  // number = 28
    console.log("number is even");  // number is even
}
```

If the condition is not met, the instructions will not be executed.

The `if` operator is often used with an optional `else` block, which executes when the condition is `false`.

```js
let passScore = 25;
let score = 20;
if (score >= passScore){
    // next line will NOT be executed
    console.log("You passed the exam!");
} else {
    // next line will be executed
    console.log("You failed the exam!");  // You failed the exam!
}
```

Conditional `if` blocks can be nested within each other or combined in a chain.
```
if (...){
    ...
} else if (...){
    ...
} else if (...){
    ...
}
```

To avoid confusion, think of nested instruction blocks as separate small programs.

You can read more about conditional statements and if-else [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

<div class="hint">

If you do not specify curly braces, the `if` statement will only apply to one of the following instructions:
```js
if (number % 2 === 0)
console.log("number is even");  // number is even
console.log("Hello");  // this will always be executed, regardless of the "number" value
```
</div>

### Task
Imagine you are developing a fitness monitoring program. You need to estimate the intensity of the user's workout based on their heart rate. Fill in the gaps according to the following conditions:
- If the heart rate is _less than or equal_ to `120`, the workout is considered `"Easy"`.
- If the heart rate is _greater than_ `120` but _less than or equal_ to `155`, the workout is considered `"Moderate"`.
- If the heart rate is _strictly greater than_ `155`, the workout is considered `"Hard"`.
