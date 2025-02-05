When we write educational programs or simple examples, we usually don't think about the fact that the initial data may be wrong, 
that an error may occur during the execution of the program, and so on. 
However, in reality, it is crucial that the program should remain functional, and in case of a problem 
it should clearly and unambiguously tell the user what went wrong. 
For example, if you register on some website, it is much clearer to see the message 
"a user with this mail already exists" than a listing with dozens of lines of obscure errors.

Suppose we are writing a program to display the square root of the `discriminant` variable value:
```javascript
let discriminant = 225;
console.log(Math.sqrt(discriminant));  // 15
```

This program is clear, but if `discriminant` is negative, the user will see `NaN`, which will tell us little about the cause of the error. 
For this purpose, we can add a check before calculating the square root:

```javascript
let discriminant = -225;
if (discriminant < 0) {
    console.log("Discriminant is negative");  // this line will be executed
} else {
    console.log(Math.sqrt(discriminant));
}
```

### Task
You are writing a very polite program that always greets the user. 
For this purpose there is a special function `greeting`, which takes as a parameter an object containing 
the user's first and last name, and returns the greeting as `"Hello, <Name> <Surname>!"`. 

But there is a problem: sometimes this function may receive an object that does not contain the attributes it needs. 
In this case, the function should still return a greeting message, but `"Hello, stranger!"`.

<div class="hint">
  You may remember how to check if an object contains the required attribute in <a href="course://Data Structures/Working with properties">Working with properties</a> task.
</div>

<div class="hint" title="Template string">

  In programming, it is quite often necessary to fill a string according to a certain pattern. 
  _Template string_ is a special string in backtick (<code>&#96;</code>) characters, in which you can embed various expressions using placeholders like `${expression}`.

  ```
  let num = 10;
  let str = "Example";
  console.log(`${str}: number^2 = ${num*num}`);  // Example: number^2 = 100
  ```

  You can see one more example of using the template string in this task and read more about them <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">here</a>.
</div>
