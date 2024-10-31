Previously, we have worked with variables of simple data types, such as numbers and strings. 
These are called _primitives_. However, we also briefly discussed more complex data types, such as objects. Now, let's examine objects in more detail.
An object can be thought of as a box with files stored inside. We will call the file name the "property name" and what is stored in the file the "value".

Let's revisit the simplest task from the previous lesson: creating an empty object with no properties. We can do this in two ways:
```javascript
// Using the keyword "new"
let car = new Object();
// Or simply with empty curly brackets
// This declaration is called an "object literal"
let car = {};
```

If we want to declare an object with some properties, we simply list the property-value pairs in curly braces. The property name is also called the “key”.
```javascript
let car = {     // an object
  brand: "Volkswagen",  // key "brand" with value "Volkswagen"
  mileage: 32485        // key "mileage" with value 32485
};
```

### Task
Declare an object named `student` with three properties:
- `name` with the value `"Bob"`
- `age` with the value `21`
- `averageGrade` with the value `4.28`
