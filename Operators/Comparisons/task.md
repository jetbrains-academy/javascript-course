You are familiar with _comparison_ operators from school math.
In JS, we have the following _comparison_ operators. The result of these operators is always of type _boolean_.
```
>  -- greater than
<  -- less than
>= -- greater than or equal to
<= -- less than or equal to
== -- equal to
!= -- not equal to
```

For example:
```javascript
console.log(10 <= 20);  // true
console.log(10 == 20);  // false
console.log(10 != 20);  // true
```

### Comparing strings
You can compare strings as well as numbers. They are compared _lexicographically_. The idea of this approach is as follows:
1. The first characters of the strings are compared. If they are **not** equal, then the result of comparing the strings is the result of comparing these **characters**.
2. If they are **equal**, then the next characters are compared (go to step 1).
3. If one of the strings in this character-by-character comparison ends earlier, it is considered "less".
4. If the strings are **equal** in length and **all characters match**, then the strings are **equal**.

But how are the characters compared? They are compared according to their order in the alphabet. Earlier means less.

What about _uppercase_ characters? Any _uppercase_ character is considered _less_ than any _lowercase_ character.
```javascript
console.log("Z" < "a");               // true
console.log("Abra" < "Abracadabra");  // true
console.log("Abadef" < "Abc");        // true
```

### Comparing different types
If you try to compare different data types, JavaScript will attempt to convert them to numbers:
```javascript
console.log("20" > 9);   // true, string "20" will be converted to number 20
console.log(true == 1);  // true
```
You can read more about _comparison operators_ [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators).

### Task
You are given a program with blanks. 
Fill in the blanks to check if the value falls within the specified range.

<div class="hint">
  When solving this task, you will need to use both <i>comparison</i> operators and the <i>logical</i> operator.
</div> 
