We already talked about type coercion earlier in the [Data Types](course://Data Types/type_coercion) lesson. 
Some programming languages allow you to define your own operations on objects as well, such as addition or subtraction, but not JavaScript. 
In JavaScript, objects are always auto-converted to primitives when performing such operations. 
Thus, the result of applying arithmetic operators to objects cannot be another object.

However, objects can be converted to `Boolean`, `Number`, and `String` types depending on their context of use.
1. `Boolean`. Objects are always `true`. That's it.
2. `Number`. Objects are converted when performing arithmetic operations on them.
3. `String`. In some cases where a string is expected from the context, objects can be converted to a `String`.

To define exactly how your object will be converted, you can use the built-in symbol named [Symbol.toPrimitive()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 
or the [toString() and valueOf()](https://javascript.info/object-toprimitive#tostring-valueof) methods.

```javascript
let item = {
    name: 'pineapple',
    price: 3.45,
    valueOf(){
        return this.price
    },
    toString(){
        return this.name
    }
}
// unary plus to make numeric; valueOf() is called
console.log(+item)  // 3.45

// force a coercion to `String`; toString() is called
console.log(String(item))  // pineapple
```

### "this" keyword
In the example above, you may be confused by the use of the `this` keyword. It is used to refer to an object from its method. 
For example, in the `valueOf` method we need to access the `price` field, but it is outside the available scope, so we can do it using `this` as an object reference.

You can read more about "this" [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) and about object conversion [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion).

### Task
You are given a `subscription` object reflecting the details of subscription to an online service. 
Further in the program it would be convenient to use it in arithmetic operations when planning the budget. 
It is expected that in this case it should have been coerced to a number equal to the total subscription value for the period specified in the `month` attribute.

Add a `valueOf` method to the `subscription` object to get the expected behavior of the program.
