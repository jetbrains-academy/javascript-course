One of the beauties of computer programs is that you can automate the same repetitive action. 
Imagine you need to display numbers from 1 to 10 on the screen. 
Of course, you don't want to write 10 commands `console.log` and that's where _loops_ come to our rescue.

In JS as in most other languages, there are several type of loops. Let's start with the simplest one — the `while` loop. 
Its idea is simple: it needs to specify what actions should be repeated and the condition under which it should be done.

```js
let a = 3
while(a > 0){  // condition
    // loop body
    console.log(a);
    a--;
}
// Prints: 3 2 1
```

As soon as the program execution reaches the loop, before executing the body, the condition `a > 0` will be checked. 
It is `true`, so the first _iteration_ of the loop will be executed. The `a` variable will be printed, and after it `a` will be decremented.

After this iteration, the algorithm will be repeated: the condition will be checked and the body of the loop will be executed.

At the last iteration of the loop, the `a` value will be printed (it will be `1`) and `a` will be decremented. 
That is, `a` will now be equal to zero. When the condition `a > 0` will be checked again, it will be `false` and the loop execution will be completed.

So, with the loop condition, we can control how many times its body will be executed and when exactly it will finish. 
The most common error of programmers when working with loops is an _infinite loop_. This can happen when the loop termination condition never occurs:

```js
// Error: infinite loop
// variable `a` always be equals 3
let a = 3
while(a > 0){
    console.log(a);
}
```

Or a slightly more complicated example:

```js
// Error: infinite loop
// variable `a` will not be zero, but become negative
let a = 3
while(a !== 0){
    console.log(a);
    a = a - 2
}
```

You can read more about the `while` cycle [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while).

### Task

Write a function for calculating the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of two numbers. 
You can use the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm#Implementations) for it.