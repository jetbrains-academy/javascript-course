The Set data structure differs from the previous ones. It stores values without any keys. The peculiarity of a Set is that each value can only be stored once.
This can be very handy when we don't want to manually keep track of duplicate items.

Declaration is as simple as it is for a _Map_:
```
let data = new Set();
```

The main methods are as follows:
- `data.add()` – adds a new value to the `data` Set.
- `data.delete()` – removes a value from the `data` Set.
- `data.has()` – checks if the `data` Set has an element with a particular key.
- `data.clear()` – removes all elements from the `data` Set.

```javascript
let data = new Set();
data.add("One");
data.add("Two");
data.add("Two");
console.log(data);  // Set(2) { 'One', 'Two' }
```

For more information about Set, read [this doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

### Task
Create a Set named `names` and add the elements `"Ron"` and `"Harry"` to it.
