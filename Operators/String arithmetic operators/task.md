In arithmetic, the plus operator means adding numbers. 
But you may have noticed that intuitively it often denotes union. 
For example, if you see `Lemonade+ice` in the restaurant menu, you will immediately understand what is meant and will not think about math lessons.

There is similar logic in the JavaScript language. For example, the `+` operator can be used to _concatenate_ strings:


```javascript
let s = "Hello" + "World"
console.log(s)  // HelloWorld
```

If the addition operator has only one of the elements of type string, the second element will be converted to type string:
```javascript
console.log(1 + ' January')  // 1 January
console.log('January ' + 1)  // January 1
```

Plus is the only binary arithmetic operator that does this. The others will, on the contrary, convert arguments to numbers:
```javascript
console.log("1" - true)  // converts "true" to 1
console.log("10" / "2")  // converts both operands to integers
console.log(10 * "2")  // converts "2" to integer
```

Sometimes, if we need to convert a non-number to a number, the unary plus operator comes to the rescue. If the operand is already a number, no other conversions will take place:
```javascript
console.log(+false)  // converts false to 0
console.log(+"-10")  // converts to integer
console.log(+10)     // leave integer without any convertions
```

You can read more about string operators [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators)

### Task
You are given a student object
Using the values of its fields and string concatenation operator, write string with the following format to the signature variable:
```
"<name>, <age> years old, <university> University"
```
Where instead of `<name>`, `<age>` and `<university>` should be values of `name`, `age` and `university` fields of student object correspondingly.
