We've already looked at _objects_, which allow us to store data as key-value pairs, and _arrays_, which are designed to store data in a specific order. But programmers often need more specialized data structures.

A _Map_ is very similar to an _Object_. It is also designed to store data in the form of key-value pairs. The main difference between a _Map_ and an _Object_ is that in a _Map_, the keys can be of any type.

Let's start with the declaration:
```javascript
let squares = new Map();
```

Now our Map `squares` is empty. To add new elements, we can use the `set()` method, which takes a `key` and a `value` as arguments. 
If a value with the same key has already been added earlier, the **value is replaced with the new one**.

```javascript
squares.set(4, 16);
squares.set(5, 25);
squares.set("Four",  "Four");
squares.set("Four",  "Sixteen");

console.log(squares);  // Map(3) { 4 => 16, 5 => 25, 'Four' => 'Sixteen' }
```

Map also offers additional methods that are useful to us:
- `squares.get()` – returns the value associated with the key. Returns `undefined` if the key does not exist in the `squares` Map.
- `squares.has()` – check if the `squares` Map has an element with a particular key.
- `squares.delete()` – deletes the pair with a particular key.
- `squares.clear()` – removes all pairs from the `squares` Map.

```javascript
squares.delete(4)
console.log(squares.has(4));  // "false" since we deleted the pair with that key
console.log(squares.get("Four"));  // "Sixteen"
```

For more information about `Map`, read [this doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

### Task
You are given the map `fruitWeights`.
- Remove the pair with the key `"Tomato"`.
- Add a new pair with the key `"Pomelo"` and the weight of `1.45`.
