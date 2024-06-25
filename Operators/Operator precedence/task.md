This may not be obvious, but all operators have a different priority - the order in which they will be executed. 
You can read a great and detailed article about operator precedence [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

For example
```javascript
console.log(+"1" + +"2" - 2**2)  // -1
```
_unary plus_ operators have the highest precedence, and we can imagine that on first step calculations will be transformed to

```javascript
console.log(1 + 2 - 2**2)  // -1
```

Next will be performed exponentiation.
```javascript
console.log(1 + 2 - 4)  // -1
```
And only then addition and subtraction.

We won't ask you to learn by heart the operation precedence table – even an experienced programmer can sometimes get confused by it. 
We suggest that in any situation when you are not sure about the priority of operations, use brackets to control the priority:
```javascript
console.log( (+("1" + "2") - 2)**2 )  // 100
```

### Task
Place brackets in the expression so that the result variable contains the value `74`.
