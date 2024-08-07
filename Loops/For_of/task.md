Of course, the most common case is when we need to traverse the elements of some data structure. 
And for this there is another special `for..of` loop. It is very similar to the `for..in` loop, but they are not interchangeable. 

Use `for..of` to iterate over **data structures**, and `for..in` to iterate over **object’s properties**.

```js
let colors = ["red", "blue", "green", "yellow"]

for(const color of colors) {
    console.log(color);
}

// Prints:
// red
// blue
// green
// yellow
```

As you can see, `color` takes the values of the elements of the `colors` array one-by-one, allowing us to iterate through all the elements of the array.

We can easily do the same using a `for` loop, but if we don't need to know the indexes of the elements, `for..of` is shorter and simpler.

Moreover, `for..of` can be used to iterate over not only arrays. You can use it, for example, for [Set](course://Data Structures/Set) or [Map](course://Data Structures/Map) too:

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

You can read more about `for..of` loop [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

### Task
Implement the `arrayMax` function, which should take an array of numbers as a parameter and return the maximum value of this array.

The idea of finding the maximum element of an array is quite simple:
- At the very beginning we can make an assumption that the largest element is the first element, memorizing its value into a variable, say `maxVal`.
- Next, we go through all the elements, comparing each one with `maxVal`.
- If the next element of the array is greater than `maxVal`, we update `maxVal` with its value.

Thus, having looked through all the elements in `maxVal` we will store the maximal one.
