The next loop we'll look at is `for..in`. Despite the similarity in the name, it is quite different from the `for` loop.

In the [Data Structures lesson](course://Data Structures), we learned how to work with object properties. Let's take the object declaration from [this](course://Data Structures/Working with properties) example:

```js
let car = {
    brand: "BMW",
    mileage: 268794,
    owner: "Jacob"
};
```

Using the `for..in` loop, you can walk over all keys of this object, and get the values of those keys:

```js
for (key in car) {
    console.log(key, ":", car[key]);
}
// Prints
// brand : BMW
// mileage : 268794
// owner : Jacob
```

At each iteration of the loop, `key` will take next key name of the `car` object. In fact, `key` is a string.

You may have noticed that the keys were gotten in the same order in which they were declared. But this is not always the case. 
For example, if there is a non-negative integers among the keys, they will be traversed first in ascending order:

```js
let car = {
    brand: "BMW",
    "10": "1024",
    mileage: 268794,
    owner: "Jacob",
    "3": "8"
};

for (key in car) {
    console.log(key, ":", car[key]);
}
// Prints
// 3 : 8
// 10 : 1024
// brand : BMW
// mileage : 268794
// owner : Jacob
```

You can read more about the `for..in` loop [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).

### Task
A `medals` object containing information about countries (key) and the number of medals received at the Olympics (value) is given.

Implement the `medalsFilter` function that takes two arguments:
- Object `medals`.
- Number `count`. 

As a result, the function should return an array of the names of countries (keys of the `medals` object) that have received strictly more medals than `count`.
