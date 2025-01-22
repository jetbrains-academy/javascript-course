We said that logical operators can work not only with the boolean type. Let's take a closer look at this.  
First of all, if the operand is not of boolean type, it will be converted to it:
```javascript
a = !(1 || false);  // the same as !(true || false)
console.log(a);  // false
```

For a complete list of which values can be converted to `true`, see the [list of truthy values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).  
For a complete list of which values can be converted to `false`, see the [list of falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

In order not to get completely confused, here are the most frequently encountered values that are converted to `false`:
- `null`
- `0` (zero)
- `""` (empty string)
- `undefined`

```javascript
let itsFalse = null || NaN || 0 || "" || undefined;  // itsFalse will have "undefined" value
console.log(!itsFalse);  // "undefined" negation is "true"
```

Sometimes it can be useful to explicitly convert a type to boolean. To do this, you can use the `!!` operator. In fact, it can be considered as two consecutive `!` operators.

```javascript
console.log(!!-2);  // true
```

### Task
You are given a program with blanks. Fill in the blanks so that the program displays only `true`, using only the following set of possible values. 
Each value should be used only once.  
Possible values:
- `null`
- `""`
- `-2`
