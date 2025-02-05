Do you remember the task where we had to determine the intensity of a user's workout based on the range in which their heart rate falls?
What if we don't have a range but instead have a finite set of values? In this case, we can eliminate the need for an `if-else-if` chain by using the `switch` operator.

Let's understand how to work with it through an example:
```js
let color = "green";
let action = "";
switch(color) {
    case "red":
        action = "Stop";
        break;
    case "yellow":
        action = "Caution";
        break;
    case "green":
        action = "Go";
        break;
    default:
        action = "Invalid";
}
console.log(action);  // Go
```

The `switch` operator takes a value as an _argument_. It tries to compare this value one by one with the values specified by the `case` keywords. If there is a match, the instructions specified after the corresponding `case` are executed.
If none of the values from the `case` statements match, then the instructions in the `default` block (if this block is present) are executed. The `default` block is optional.

You may notice that all case blocks have a `break` statement following the assignment instruction.
When the `break` instruction is executed, the processing of the `switch` block is terminated. If you remove `break`, the subsequent `case` blocks will be executed until a `break` is encountered or the end of the `switch` block is reached:
```js
let letter = "b";
switch(letter) {
    case "a": console.log("a");  // will NOT be executed
    case "b": console.log("b");  // will print "b"
    case "c": console.log("c");  // will print "c"
}
```
The `switch` statement is quite specific but very flexible. You can learn about all the details of its use [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).

### Task
You are given a fragment of a program that checks whether a given day of the week is a weekend. Complete the gaps in the `switch` statement so that:
- `isWeekend` is `true` if `dayOfWeek` equals `"Saturday"` or `"Sunday"`.
- `isWeekend` is `false` otherwise.
