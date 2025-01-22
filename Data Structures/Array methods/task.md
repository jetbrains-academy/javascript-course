Arrays provide not only the `at()` method to make working with them easier.
Here are some other methods:
- `push()` – **adds** an element to the **end**
- `pop()` – **extracts** an element from the **end**
- `shift()` – **extracts** an element from the **beginning**
- `unshift()` – **adds** an element to the **beginning**

```javascript
let colors = ["red", "blue", "green"]
let last = colors.pop()  // extracts "green" and returns it as a result
console.log(last);       // prints "green"
colors.push("pink")      // adds "pink" to the end

let first = colors.shift()  // extracts "red" and returns it as a result
console.log(first);         // prints "red"
colors.unshift("white")     // adds "write" to the beginning

console.log(colors)  // [ "white", "blue", "pink" ]
```

You can read about plenty of other methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods).

### Task
You are given an array `numbers` with number names.  
Remove the first two elements from the array and add them to the array `answer` **in reverse order**. This means that the array `answer` should be:
```
[ "Two", "One" ]
```

<div class="hint">
  Pay attention to how the <code>shift()</code> method works.
</div>

