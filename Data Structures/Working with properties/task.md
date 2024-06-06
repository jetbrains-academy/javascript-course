We can access the properties of an object using the dot (`.`) operator and also can change the value of properties.
```javascript
let car = {     // an object
  brand: "Volkswagen",  // key "brand" with value "Volkswagen"
  mileage: 32485        // key "mileage" with value 32485
};
console.log(car.brand)  // prints "Volkswagen"
car.mileage = car.mileage + 750  // increase mileage property
```

Moreover, JavaScript allows you to add new or remove existing properties at any time. If you try to get the value of nonexistent property, its will be `undefined`
```javascript
console.log(car.color)  // prints "undefined"
car.color = "Red"
console.log(car.color)  // prints "Red"
delete car.color        // removing "color" property
console.log(car.color)  // prints "undefined"
```

If we need to check if an object has a particular property, we can use the `in` operator for that:
```javascript
console.log("model" in car)  // prints "false"
console.log("brand" in car)  // prints "true"
```

### Task
Add two new properties to `car` object:
- `price` with value `9250`
- `currency` with value `"USD"`
