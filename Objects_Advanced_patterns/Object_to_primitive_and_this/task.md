We already talked about type coercion earlier in the [Data Types](course://Data Types/type_coercion) lesson. 
Some programming languages allow you to define custom operations on objects, such as addition or subtraction, but JavaScript does not. 
In JavaScript, objects are always auto-converted to primitives when performing such operations. 
Therefore, applying arithmetic operators to objects cannot result in another object.

However, objects can be converted to `Boolean`, `Number`, or `String` types depending on the context they are used in.
1. `Boolean`: Objects are always treated as `true`. That's all there is to it.
2. `Number`: Objects are converted to numbers when arithmetic operations are performed on them.
3. `String`: In situations where the context expects a string, objects can be converted to a `String`.

To control how your object is converted, you can use the built-in symbol [Symbol.toPrimitive()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 
or the [toString() and valueOf()](https://javascript.info/object-toprimitive#tostring-valueof) methods.

```javascript
let item = {
    name: "pineapple",
    price: 3.45,
    valueOf(){
        return this.price;
    },
    toString(){
        return this.name;
    }
};
// unary plus to convert to a numeric value; valueOf() is called
console.log(+item);  // 3.45

// force coercion to a `String`; toString() is called
console.log(String(item));  // pineapple
```

### The "this" keyword
In the example above, you might be confused by the use of the `this` keyword. It is used to refer to the object that a method belongs to. 
For example, in the `valueOf` method, we need to access the `price` field. Since the field is outside the available scope, we can use `this` as a reference to the object to access it.

You can read more about "this" [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) and about object conversion [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion).

### Task
You are given a `subscription` object that contains the details of a subscription to an online service. 
Later in the program, it would be convenient to use this object in arithmetic operations for budget planning. 
In such scenarios, the object is expected to be coerced to a number equal to the total subscription value for the period specified in the `month` attribute.

Add a `valueOf` method to the `subscription` object to achieve the desired behavior.
