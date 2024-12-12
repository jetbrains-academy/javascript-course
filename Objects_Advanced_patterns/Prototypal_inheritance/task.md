In programming, we may need to not only create new objects, but also extend existing ones, and in JavaScript we have the ability to do so.

_Prototypal inheritance_ is a mechanism that allows us to specify which object we want to extend.

For example, we may have a `car` object that describes the properties of a car. 
To describe a car that belongs to someone, we can extend the current set of properties with other ones. 
To do this, we use a special property `[[Prototype]]` and it's setter `__proto__`. By default, `[[Prototype]]` is `null`, but we can write a reference to the prototype object into it.

```javascript
let car = {
    model: 'Audi A6',
    year: 2022,
    color: 'cherry'
}

let registeredCar = {
    __proto__: car,
    owner: 'Alex',
    numberPlate: '12AB345'
}

console.log(registeredCar.color);  // cherry
car.color = 'black';
console.log(registeredCar.color);  // black
```

By setting the `car` object as a prototype for the `registeredCar` object, we have specified that when a property of the `registeredCar` object is accessed that it does not have, 
the search for that property will continue among the properties of the `car` object. Such redirection occurs automatically.

In this way more than two objects can be combined into a chain.

<div class="hint" title='"this" keyword in inheritance' >
  Don't forget that when a method is called, <code>this</code> reference will still point to the object where the method was called.

  ```javascript
  let car = {
    model: 'Audi A6',
    year: 2022,
    color: 'cherry',
    accident(){
      this.damaged = true;
    }
  }
  
  let registeredCar = {
    __proto__: car,
    owner: 'Alex',
    numberPlate: '12AB345'
  }
  
  console.log(registeredCar);  // prints { owner: 'Alex', numberPlate: '12AB345' }
  
  registeredCar.accident();
  
  console.log(registeredCar);  // prints { owner: 'Alex', numberPlate: '12AB345', damaged: true }
  ```
  
  Therefore, even though the accident method is declared inside the car object, when calling it for the `registeredCar` object, 
  the `damaged` property will be set exactly at the `registeredCar` object.
</div>

You can read more about inheritance and the prototype chain [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

### Task
You are given a `car` object containing information about the car and a `registeredCar` object extending a `car` object with information about the license plate number and owner.

You need to declare the `hiredCar` object using the `registeredCar` object as a prototype and add the `lessee` attribute with the value `"Jacob"`.
