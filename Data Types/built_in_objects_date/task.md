The `Date` object is used to work with dates and times.

<div class="hint" title="Some Date methods">
Use the <code>Date</code> object methods to manipulate and work with dates and times. Here are some commonly used methods:

- <code>now()</code>: Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
- <code>getFullYear()</code>: Returns the year of the specified date.
- <code>toDateString()</code>: Returns the date portion of a <code>Date</code> object as a human-readable string.

For more information, refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">up-to-date JavaScript documentation on the <code>Date</code> object.</a>
</div>

```javascript
let date = new Date();
console.log(date.toDateString()); // e.g., "Mon Oct 09 2023"
console.log(date.getFullYear()); // e.g., 2023
```

### Task
Practice working with dates:
 - Create a new `Date` object with the current date and time.
 - Extract the year from this date.
 - Convert the date to a human-readable string.

<div class="hint" title="Don't reinvent the wheel"> Remember to use the <code>Date</code> object methods to manipulate and work with dates and times. </div>
