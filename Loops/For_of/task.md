Of course, the most common case is when we need to traverse the elements of some data structure.
For this, there is a special `for..of` loop. It is similar to the `for..in` loop, but they are not interchangeable. 

Use `for..of` to iterate over **data structures** and `for..in` to iterate over **an object’s properties**.

```js
let colors = ["red", "blue", "green", "yellow"];

for (const color of colors) {
    console.log(color);
}

// Prints:
// red
// blue
// green
// yellow
```

As you can see, `color` takes the values of the elements in the `colors` array one by one, allowing us to iterate through all the elements.

We could achieve the same with a `for` loop, but if we don't need the indexes of the elements, `for..of` is shorter and simpler.

Moreover, `for..of` can be used to iterate over more than just arrays. For example, you can use it with a [Set](course://Data Structures/Set) or [Map](course://Data Structures/Map) as well:

```js
const fruitWeights = new Map([
    ["Orange", 0.28],
    ["Pineapple", 1.34],
    ["Apple", 0.217],
]);

for (const entry of fruitWeights) {
    console.log(entry);
}
```

You can read more about the `for..of` loop [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

### Task
Implement the `arrayMax` function, which takes an array of numbers as a parameter and returns the maximum value in the array.

The process of finding the maximum element is straightforward:
- Initially, assume the largest element is the first one, and store its value in a variable, such as `maxVal`.
- Next, we go through all the elements, comparing each one with `maxVal`.
- If an element is greater than `maxVal`, update `maxVal` with its value.

By the end of the loop, `maxVal` will hold the maximum value in the array.
