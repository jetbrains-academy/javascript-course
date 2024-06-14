The Set data structure is not similar to the previous ones. It stores values without any keys. The peculiarity of Set is that each value there can be stored only in one quantity.
This can be very handy when we don't want to keep track of duplicate items ourselves.

Declaration is as simple as it is for _Map_:
```
let data = new Set();
```

The main methods are as follows:
- `data.add()` – adds a new value to `data` Set
- `data.delete()` – removes the value from `data` Set
- `data.has()` – check if `data` Set have element with particular key
- `data.clear()` – removes all elements from the `data` Set

```javascript
let data = new Set();
data.add("One")
data.add("Two")
data.add("Two")
console.log(data)  // Set(2) { 'One', 'Two' }
```

For more information about Set read [this doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

### Task
Create Set `names` and add elements `"Ron"` and `"Harry"` into it
