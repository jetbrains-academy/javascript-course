In programming, it is a very commonly used operation of decreasing or increasing some variable by one. 
So much so that there are dedicated operations for that:  
- `++` for _increment_ 
- `--` for _decrement_


The difficulty for beginners is that they can be used in _prefix_ and _postfix_ form. Let's deal with it by examples:

```javascript
let sum = 10
sum++
console.log(sum);  // 11
++sum
console.log(sum);  // 12
```

So far there seems to be no difference. And it does, as long as we don't try to assign the result of this operation.

```javascript
let temp  // declare one more variable

sum = 10
temp = sum++
console.log(sum);   // 11
console.log(temp);  // 10

sum = 10
temp = ++sum
console.log(sum);   // 11
console.log(temp);  // 11
```

Now we can see the difference:
The _prefix_ form returns an already incremented value as an operator's result. While the _postfix_ form returns the old value, before the increment operation was performed.

The decrement operator works exactly the same way.
You can also read more about [increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment) and [decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)

### Task
Place increment or decrement instead of `???` in such a way that after the program execution the values of the variables will be:
- `a`: `11`
- `b`: `9`
- `c`: `9` 
