It already seems trivial for us to have such a line where we assign the value `"Tom"` to the variable `name`.
```js
let name = "Tom"
```

But actually, in JavaScript, a function can also be a value, and it can be assigned to a variable:
```js
let hello = function () {
    console.log("Hello!")
}

hello()  // prints "Hello!"
```

This is another way for creating a function called _Function Expression_. It allows you to define a function inside an expression.

The main difference between a _function expression_ and a _function declaration_ is the function name, which can be omitted in _function expressions_ to create _anonymous_ functions. A more specific description is beyond the scope of the course for now, so you can read in detail about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).


### Task

Since the value in an assignment can be a function, you can use this feature in further assignments as well.

Declare the variable `summarizer` and assign it the value of the variable `add`.