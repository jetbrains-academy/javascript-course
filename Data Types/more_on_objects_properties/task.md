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
Accessor properties are properties defined by a pair of getter and setter functions. They do not hold a value but compute it when accessed.

- `get`: A function that is called when the property is read.
- `set`: A function that is called when the property is set.

We'll talk more about the functions in detail in the [Functions lesson](course://Functions). 
For now, it is enough to imagine `get` and `set` functions as pieces of code that will be executed when reading or changing the corresponding field.

You can define accessor properties using the `Object.defineProperty` method:

```javascript
let person = {
    firstName: "Alice",
    lastName: "Smith"
};

Object.defineProperty(person, "fullName", {
    get: function() {
        return this.firstName + " " + this.lastName;
    },
    set: function(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
});

console.log(person.fullName); // "Alice Smith"
person.fullName = "Bob Johnson";
console.log(person.firstName); // "Bob"
console.log(person.lastName); // "Johnson"
```

### Task
You're given an object named `book` with the following data properties:
- `title`
- `author`
- `year`

Define the accessor property `summary`.
The `summary` property should return a string in the format: `"Title by Author, published in Year"`.

<div class="hint" title="Hint for Task">
Remember to use the `Object.defineProperty` method to define the `summary` accessor property.
</div>

<div class="hint" title="Want to know more?">
For more information, refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_properties">up-to-date JavaScript documentation on object properties</a>.
</div>
