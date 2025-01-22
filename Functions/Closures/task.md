In the [Variable Scopes lesson](course://Variables/Variable scopes), we learned that all variables have their own scopes. 
For example, in this case, the scope of the variable `name` is limited to the `helloGenerator` function. We cannot use it outside the body of this function:
```js
function helloGenerator(name){
    // ...
}
console.log(name);  // ReferenceError: name is not defined
```
However, JavaScript has a mechanism that allows a function to remember the environment in which it was created. This mechanism is called a _closure_.
```js
function helloGenerator(name){
    function hello(){
        console.log("Hello, " + name);
    }
    hello();
}

helloGenerator("Tom");  // will print "Hello, Tom"
```

But we can go even further. Remember that a function can act as a regular value. So, let's try returning a function as the return value of another function.
```js
function helloGenerator(name){
    function hello(){
        console.log("Hello, " + name);
    }
    return hello;  // no () brackets! We don't want to call the hello function here
}

helloTom = helloGenerator("Tom");
helloTom();  // will print "Hello, Tom"
```
Note that in this example, we are calling the `hello` function using the `helloTom` variable outside the `helloGenerator` function.
However, the function still remembers the context in which it was created and the value of the variable `name`!

This approach, where a function needs to remember some context, is especially common in web development. You can read more about closures [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

### Task

Imagine we have an application that displays temperature, and we use the `showTemperature` function to generate a string for the screen based on the temperature parameter. 
The default temperature in our application is in [Celsius](https://en.wikipedia.org/wiki/Celsius), but we also want to support [Fahrenheit](https://en.wikipedia.org/wiki/Fahrenheit).

It would be inconvenient to constantly pass an additional parameter to the `showTemperature` function to specify whether the temperature should be displayed in Celsius or Fahrenheit. This is where closures come in handy!

Fill in the blanks in the `makeShowTemperature` function so that if `isFahrenheit` is true, a function that generates a message in Fahrenheit is returned; otherwise, a function that generates a message in Celsius is returned.

You can use this formula for converting Celsius to Fahrenheit:

$$c\ °C\ to\ f\ °F:\ f = c × 1.8 + 32$$