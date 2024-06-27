We can access the properties of an object using the dot (`.`) operator and also change the value of properties.
```javascript
let car = {     // an object
  brand: "Volkswagen",  // key "brand" with value "Volkswagen"
  mileage: 32485        // key "mileage" with value 32485
};
console.log(car.brand)  // prints "Volkswagen"
car.mileage = car.mileage + 750  // increase mileage property
```

Moreover, JavaScript allows you to add new properties or remove existing ones at any time. If you try to get the value of a nonexistent property, it will be `undefined`. You can also delete any existing property using the `delete` operator.
```javascript
console.log(car.color)  // prints "undefined"
car.color = "Red"
console.log(car.color)  // prints "Red"
delete car.color        // removing "color" property
console.log(car.color)  // prints "undefined"
```

If we need to check whether an object has a particular property, we can use the `in` operator for that:
```javascript
console.log("model" in car)  // prints "false"
console.log("brand" in car)  // prints "true"
```

### Task
- Add two new properties to the `car` object:
  - `price` with the value `9250`
  - `currency` with the value `"USD"`
- Delete the property `owner` from the `car` object.
