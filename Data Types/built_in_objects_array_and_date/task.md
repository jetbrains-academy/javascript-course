####  `Array`
The `Array` object is used to store multiple values in a single variable. It provides many methods to manipulate arrays.

<div class="hint" title="Array methods">
Use the 'Array' object methods to manipulate and work with arrays. Here are some commonly used methods:

- <code>push(element)</code>: Adds one or more elements to the end of the array.
- <code>pop()</code>: Removes the last element from the array.
- <code>shift()</code>: Removes the first element from the array.

For more information, refer to the <a href ="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">official JavaScript documentation on the Array object</a>.
</div>

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]
```

The `Array` object will be introduced in more details [later in the course](course://Data%20Structures/Introduction%20to%20Arrays/task.js)


####  `Date`
The `Date` object is used to work with dates and times.


<div class="hint" title="Some Date methods">
Use the 'Date' object methods to manipulate and work with dates and times. Here are some commonly used methods:

- <code>now()</code>: Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
- <code>getFullYear()</code>: Returns the year of the specified date.
- <code>toDateString()</code>: Returns the date portion of a Date object as a human-readable string.

For more information, refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">official JavaScript documentation on the Date object.</a>
</div>

```javascript
let date = new Date();
console.log(date.toDateString()); // e.g., "Mon Oct 09 2023"
console.log(date.getFullYear()); // e.g., 2023
```

### Task
Create a function named `analyzeDate` that performs the following operations:  
 - Returns the current date and time.
 - Returns the year of a given date.
 - Converts a given date to a human-readable string.

Print the results of each operation to the console.  
<div class="hint" title="Don't reinvent the wheel"> Remember to use the <code>Date</code> object methods to manipulate and work with dates and times. </div>