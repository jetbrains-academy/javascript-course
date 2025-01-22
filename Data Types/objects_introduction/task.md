In JavaScript, objects are a fundamental data type used to store collections of data and more complex entities. An object is a collection of properties, where each property is defined as a key-value pair.

### Creating an Object
You can create an object using the object literal syntax:

```javascript
// Example: Creating an object
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

console.log(person); // { name: "Alice", age: 25, isStudent: true }
```

### Accessing Object Properties
You can access the properties of an object using either dot notation or bracket notation:
```javascript
// Accessing properties using dot notation
console.log(person.name); // "Alice"
console.log(person.age); // 25

// Accessing properties using bracket notation
console.log(person["name"]); // "Alice"
console.log(person["age"]); // 25
```

### Task
Create an object named `car` with the following properties:  
 - manufacturer (string)
 - model (string)
 - year (number)

Initialize them according to the vehicle: Toyota Corolla 2020 production year. Print the `car` object to the console.

<div class="hint" title="How to create an object"> Remember to use the object literal syntax to create the `car` object. You can refer to the example above for guidance. </div>

<div class="hint" title="Want to know more?"> For more information, refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects">up-to-date JavaScript documentation on objects.</a></div> 
