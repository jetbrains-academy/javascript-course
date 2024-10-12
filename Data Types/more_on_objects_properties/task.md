### Understanding Data Properties
In JavaScript, a data property is a property that holds a value. It has four attributes:
- `value`: The value of the property.
- `writable`: If `true`, the value of the property can be changed.
- `enumerable`: If `true`, the property will be listed in loops.
- `configurable`: If `true`, the property can be deleted or changed.

You can define a data property using the object literal syntax:


```javascript
let person = {
    name: "Alice",
    age: 25
};

console.log(person.name); // "Alice"
```


### Understanding Accessor Properties
Accessor properties are properties that are defined by a pair of getter and setter functions. They do not hold a value but compute it when accessed.

- `get`: A function that is called when the property is read.
- `set`: A function that is called when the property is set.

You can define accessor properties using the `Object.defineProperty` method:


```javascript
let person = {
    firstName: "Alice",
    lastName: "Smith"
};

Object.defineProperty(person, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
});

console.log(person.fullName); // "Alice Smith"
person.fullName = "Bob Johnson";
console.log(person.firstName); // "Bob"
console.log(person.lastName); // "Johnson"
```


### Task
Create an object named `book` with the following properties:
- `title` (data property, string)
- `author` (data property, string)
- `year` (data property, number)
- `summary` (accessor property, string)

The `summary` property should return a string in the format: `"Title by Author, published in Year"`.

Print the `book` object and the `summary` property to the console.

<div class="hint" title="Hint for Task">
Remember to use the `Object.defineProperty` method to define the `summary` accessor property.
</div>


<div class="hint" title="Want to know more?">
For more information, refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_properties">official JavaScript documentation on object properties</a>.
</div>