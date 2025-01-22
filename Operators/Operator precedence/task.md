This may not be obvious, but all operators have different priorities — the order in which they will be executed.
You can read a great and detailed article about operator precedence [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

For example:
```javascript
console.log(+"1" + +"2" - 2**2);  // -1
```
The _unary plus_ operators have the highest precedence, so we can imagine that in the first step, the calculations will be transformed to:

```javascript
console.log(1 + 2 - 2**2);  // -1
```

Next, exponentiation will be performed.
```javascript
console.log(1 + 2 - 4);  // -1
```
And only then, addition and subtraction.

We won't ask you to memorize the operation precedence table — even an experienced programmer can sometimes get confused by it.
We suggest that in any situation where you are not sure about the priority of operations, use brackets to control the priority:
```javascript
console.log( (+("1" + "2") - 2)**2 );  // 100
```

### Task
Place brackets in the expression so that the result variable contains the value `74`.
