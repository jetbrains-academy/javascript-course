One of the great things about computer programs is that they allow you to automate repetitive tasks. 
Imagine you need to display numbers from 1 to 10 on the screen.
Of course, you wouldn't want to write 10 separate `console.log` commands — this is where _loops_ come to the rescue.

In JavaScript, as in most other languages, there are several types of loops. Let's start with the simplest one — the `while` loop.
The concept is straightforward: you define the actions to be repeated and the condition under which they should continue.

```js
let a = 3
while(a > 0){  // condition
    // loop body
    console.log(a);
    a--;
}
// Prints: 3 2 1
```

As soon as the program execution reaches the loop, the condition `a > 0` will be checked before executing the body. 
Since it is `true`, the first _iteration_ of the loop will be executed. The `a` variable will be printed, and then `a` will be decremented.

After this iteration, the algorithm repeats: the condition is checked, and if it's still true, the body of the loop is executed again.

During the last iteration of the loop, the value of `a` will be printed (it will be `1`), and `a` will be decremented.
At this point, `a` will be equal to zero. When the condition `a > 0` is checked again, it will be `false`, and the loop execution will be completed.

Thus, by using the loop condition, we can control how many times its body is executed and when it will stop.
One of the most common errors programmers make when working with loops is creating an _infinite loop_, which occurs when the loop termination condition is never met:

```js
// Error: infinite loop
// variable `a` always equals 3
let a = 3
while(a > 0){
    console.log(a);
}
```

Or a slightly more complex example:

```js
// Error: infinite loop
// The variable `a` will not reach zero, but will become negative
let a = 3
while(a !== 0){
    console.log(a);
    a = a - 2;
}
```

You can read more about the `while` cycle [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while).

### Task
Write a function to calculate the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of two numbers. 
You can use the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm#Implementations) to do this.
