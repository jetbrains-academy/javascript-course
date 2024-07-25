In the [Variables scopes lesson](course://Variables/Variable scopes), we learned that all variables have their own scopes. For example, in this case, the scope of the variable `name` is the `helloGenerator` function. We cannot use it outside the body of this function:
```js
function helloGenerator(name){
    // ...
}
console.log(name)  // ReferenceError: name is not defined
```
But JavaScript has a mechanism that allows a function to remember the environment in which it was created. It is called _closures_.
```js
function helloGenerator(name){
    function hello(){
        console.log("Hello, " + name);
    }
    hello()
}

helloGenerator("Tom")  // will be printed "Hello, Tom"
```

But we can go even further. We remember that a function can act as an ordinary value. So, let's try to return a function as a return value of another function.
```js
function helloGenerator(name){
    function hello(){
        console.log("Hello, " + name);
    }
    return hello  // no () brackets! We don't want to call hello function here
}

helloTom = helloGenerator("Tom")
helloTom()  // will be printed "Hello, Tom"
```
Note, in this example we are calling the `hello` function using the `helloTom` variable outside the `helloGenerator` function. However, the called function remembers the context in which it was created and the value of the variable `name`!

This approach, where we need a function to remember some context, is especially common in web development. You can read more about closures [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

### Task

Imagine, we have an application where we display temperature and for that we can use the `showTemperature` function, which gets the temperature as a parameter and generate a string to show on the screen. The default temperature in our application is in [Celsius](https://en.wikipedia.org/wiki/Celsius), but we want to support [Fahrenheit](https://en.wikipedia.org/wiki/Fahrenheit) too.

It would be inconvenient to constantly pass another parameter to the `showTemperature` function to display the temperature in Celsius or Fahrenheit. But that's where closures come in handy!

Fill in the blanks in the `makeShowTemperature` function so if `isFahrenheit` is true, a function that generates message in the Fahrenheit is returned, otherwise in Celsius.

You can use this formula for converting Celsius to Fahrenheit:

$$c\ °C\ to\ f\ °F:\ f = c × 1.8 + 32$$