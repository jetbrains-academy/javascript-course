Previously, we have worked with variables of simple data types, for example: number, string. 
They are called _primitives_. However, it is possible to use more complex data types, such as objects.
An object can be thought of as a box with files stored inside. We will call the file name "property name" and what is stored in the file "value".

We will talk more about objects in future lessons, now we'll just touch on them briefly. 
Let's start with the simplest – creating an empty object with no property at all. We can do it in two ways:
```javascript
// Using keyword "new"
let car = new Object();
// Or just empty with empty curly brackets
// This declaration is called an "object literal"
let car = {};
```

If we want to declare an object with some properties, it is enough to simply list the property-value pairs in curly braces. Property name is also called “key”
```javascript
let car = {     // an object
  brand: "Volkswagen",  // key "brand" with value "Volkswagen"
  mileage: 32485        // key "mileage" with value 32485
};
```

### Task
Declare object with name `student` and 3 properties:
- `name` with value `"Bob"`
- `age` with value `21`
- `averageGrade` with value `4.28`
