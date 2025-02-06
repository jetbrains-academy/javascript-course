When writing educational programs or simple examples, we often don’t consider the possibility of errors, such as incorrect initial data
or issues that may arise during program execution.
However, in practice, it is crucial that the program remains functional and, in the event of a problem,
clearly and unambiguously tells the user what went wrong.
For example, when registering on a website, it’s far more helpful to see a message like
"A user with this e-mail already exists" than a listing of dozens of obscure error lines.

Suppose we are writing a program to display the square root of the value stored in the `discriminant` variable:
```javascript
let discriminant = 225;
console.log(Math.sqrt(discriminant));  // 15
```

This program is clear, but if `discriminant` is negative, the user will see `NaN`, which will tell us little about the cause of the error.
To handle this, we can add a check before calculating the square root:

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
For this purpose, there is a special function called `greeting`, which takes an object containing
the user's first and last name as a parameter and returns the greeting: `"Hello, <Name> <Surname>!"`. 

However, there is a problem: sometimes this function may receive an object that does not contain the required attributes.
In such cases, the function should still return a greeting message, but as `"Hello, stranger!"`.

<div class="hint">
  You can find how to check if an object contains the required attributes in the <a href="course://Data Structures/Working with properties">Working with properties</a> task.
</div>

<div class="hint" title="Template string">

  In programming, it is quite often necessary to fill a string according to a certain pattern. 
  A _template string_ is a special string enclosed in backticks (<code>&#96;</code>) that allows you to embed expressions using placeholders like `${expression}`.

  ```
  let num = 10;
  let str = "Example";
  console.log(`${str}: number^2 = ${num*num}`);  // Example: number^2 = 100
  ```

  You can see another example of using a template string in this task and read more about them <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">here</a>.
</div>
