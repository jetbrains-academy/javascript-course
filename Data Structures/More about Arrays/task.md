When working with arrays, it is often necessary to know the `length` of the array, i.e., the number of elements stored in it. To do this, you can use the built-in array property `length`:
```javascript
let colors = ["red", "blue", "green", "yellow"];
console.log(colors.length);  // 4
```

Using `length`, you can easily find out the index of the last element of the array:
```javascript
console.log(colors[colors.length-1]);  // "yellow"
```

As a new feature, JavaScript arrays now have an `at()` method. It does the same thing as simply getting elements by index with `[]`, but supports negative indexes. 
Negative indexes indicate indexing from the end of the array. So, the last element when using `at` has index `-1`.
```javascript
console.log(colors.at(-3));  // “blue”
```

We may have already noticed that the `console.log()` function knows how to display the array in a "pretty" form.
However, it is also possible to convert an array element to a string directly in a JavaScript program using the `toString()` function:
```javascript
let colorsStr = colors.toString();
console.log(colorsStr);  // red,blue,green,yellow
```

### Task
Replace the fifth element from the end of the array with `"black"`.

<div class="hint">
  Hint: <code>at()</code> does not allow you to modify elements. To solve the task, use <code>length</code>.
</div>




