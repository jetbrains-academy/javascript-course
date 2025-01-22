Constant is an unchangeable variable. You can declare such a variable using the keyword `const`, set the value, and it cannot be changed again.
Such variables are used in two cases:
1. to declare unchangeable variables whose values are known at the stage of program writing, and
2. to declare variables that do not need to be changed during program execution.

Let’s start with the first case. For example, we need to use airport codes in our program.
These constants are named using capital letters and underscores.
```
const AIRPORT_LANZAROTE = "ACE";
const AIRPORT_BRNO = "BRQ";
const AIRPORT_FRIEDRICHSHAFEN = "FDH";

let destination = AIRPORT_BRNO;
```

The use of such constants allows:
- Simplifying code reading, as `AIRPORT_BRNO` is more obvious than `"BRQ"`.
- Making it easier to write programs, as we don't need to remember the airport codes and the IDE can help with autocompleting variable names.
- If the airport changes its code (this is rare but possible), we only need to change one line in our program with the constant declaration and that's it.

In the second case, follow a simple rule: if you declare a variable whose value will not change, use `const` instead of `let`.

```
const homeDirPath = ... // There may be code here that allows you to get this path
```
### Task
Correct the error(s) in the given program. 
