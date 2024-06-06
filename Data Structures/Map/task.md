We've already looked at objects, which allow us to store data as key-value pairs, and arrays, which are designed to store data in a specific order. But programmers often need more special data structures.

Map is very similar to an Object. It is also designed to store data in the form of key-value pairs. The main difference between Map and Object is that in Map the keys can be of any type.

Let's start with the declaration:
```javascript
let squares = new Map();
```

Now our Map `squares` is empty. To add new elements, we can use the `set()` method, which takes a `key` and a `value` as arguments. 
If the value of such a key has already been added earlier, the **value is replaced with the new one**.

```javascript
squares.set(4, 16);
squares.set(5, 25);
squares.set("Four",  "Four");
squares.set("Four",  "Sixteen");

console.log(squares);  // Map(3) { 4 => 16, 5 => 25, 'Four' => 'Sixteen' }
```

Map also has other methods that are useful to us:
- `get()` – returns value by the key. Returns `undefined` if no such key in Map
- `has()` – check if Map have element with particular key
- `delete()` – delete pair with particular key
- `clear()` – remove all pairs from the Map

```javascript
squares.delete(4)
console.log(squares.has(4));  // "false" since we deleted the pair with that key
console.log(squares.get("Four"));  // "Sixteen"
```

For more information about Map read [this doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

### Task
You have given map `fruitWeights`
- Remove pair with key `"Tomato"`
- Add new pair with key `"Pomelo"` and weight `1.45`
