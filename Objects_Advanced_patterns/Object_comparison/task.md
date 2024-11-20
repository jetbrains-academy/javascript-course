Working with primitives, we are using the comparison operators `==` and `===`, but we have not tried to apply them to objects.

```javascript
let car1 = {
    model: 'Volkswagen Golf',
    year: 2016
}

let car2 = {
    model: 'Volkswagen Golf',
    year: 2016
}

let car3 = car1

console.log(car1 == car2)   // false
console.log(car1 === car2)  // false
console.log(car1 == car3)   // true
console.log(car1 === car3)  // true
```

You may have already guessed that when comparing objects, the references will be compared, not the objects themselves.
The `car3` variable stores a reference to the same object as the `car1` variable, while the `car2` variable stores a reference to another object, 
although it has exactly the same set of attributes and their values.

Unfortunately, there are no built-in methods to compare the values of objects in JavaScript, 
so to avoid iterating the attributes of the compared objects manually, we suggest using the `_.isEqual()` method from the [Lodash](https://lodash.com) library.

To do this, we need to add this line to the beginning of the file:
```javascript
const _ = require('lodash');
```

And then we can compare the values of objects as follows:
```javascript
console.log(_.isEqual(car1, car2))  // true
```

You can read more about `_.isEqual()` and other methods from the Lodash library [here](https://lodash.com/docs/4.17.15#isEqual).

### Task
You are looking for a car and want to find how many options are available. 

To do this, you need to implement the `countCars` function, which should look through all the elements of the `cars` array passed to it as the first parameter 
and compare them with the `car` object passed to it as the second parameter. 

Count the number of equal to `car` objects and return it as the `countCars` function return value.
