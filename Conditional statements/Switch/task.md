You remember the task where we had to determine the intensity of a user's workout depending on the range in which his heart rate falls. 
What if we don't have a range, but a finite set of values? In this case, we can do without the `if-else-if` chain using the `switch` operator.

Let's understand by example how to work with it:
```js
let color = "green"
let action = ""
switch(color) {
    case "red":
        action = "Stop"
        break
    case "yellow":
        action = "Caution";
        break
    case "green":
        action = "Go";
        break
    default:
        action = "Invalid";
}
console.log(action)  // Go
```

Operator `switch` takes some value as an _argument_. It tries to compare it one by one with the values specified by the keywords `case`. If there is a match, the instructions specified after the `case` are executed.
If none of the values from the `case` matches, then the instructions from the `default` block (if this block presents) are executed. `default` is not a mandatory block.

You may notice that all case blocks have a `break` instruction after the assignment instruction. 
When `break` instruction is executed, processing of the `switch` block is terminated. If you remove `break`, the following `case` blocks will be executed until `break` is encountered or `switch` descriptions will end:
```js
let letter = "b"
switch(letter) {
    case "a": console.log("a")  // will NOT be executed
    case "b": console.log("b")  // will print "b"
    case "c": console.log("c")  // will print "c"
}
```
`switch` is a pretty specific but very flexible operator. You can learn about all the specifics of its use [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).

### Task
You are given a fragment of a program that checks that the day of the week is a weekend. Complete the gaps in the `switch` in such a way that
- `isWeekend` would be `true` if `dayOfWeek` equals `"Saturday"` or `"Sunday"`
- `isWeekend` would be `false` otherwise

