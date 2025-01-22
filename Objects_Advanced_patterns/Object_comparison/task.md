When working with primitives, we use the comparison operators `==` and `===`. However, we have not yet explored how they behave when applied to objects.

```javascript
let car1 = {
    model: "Volkswagen Golf",
    year: 2016
};

let car2 = {
    model: "Volkswagen Golf",
    year: 2016
};

let car3 = car1;

console.log(car1 == car2);   // false
console.log(car1 === car2);  // false
console.log(car1 == car3);   // true
console.log(car1 === car3);  // true
```

You may have already guessed that when comparing objects, their references are compared, not the objects themselves.
For example, the `car3` variable stores a reference to the same object as the `car1` variable, whereas the `car2` variable stores a reference to another object, 
even though it has exactly the same set of attributes with identical values.

Unfortunately, JavaScript does not provide built-in methods for comparing the values of objects. 
To avoid manually iterating over the attributes of the compared objects, we suggest using the `_.isEqual()` method from the [Lodash](https://lodash.com) library.

To do this, we need to add the following line at the beginning of the file:
```javascript
const _ = require("lodash");
```

You can then compare object values as shown below:
```javascript
console.log(_.isEqual(car1, car2));  // true
```

You can read more about `_.isEqual()` and other methods from the Lodash library [here](https://lodash.com/docs/4.17.15#isEqual).

### Task
You are searching for a car and want to find out how many options are available. 

To do this, you need to implement the `countCars` function. This function should iterate through all the elements of the `cars` array, which is passed to it as the first parameter, 
and compare each one to the `car` object provided as the second parameter. 

The function should count the number of objects that are equal to `car` and return this count as its result.
