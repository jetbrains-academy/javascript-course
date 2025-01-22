In programming, we often need not only to create new objects but also to extend existing ones. In JavaScript, we have the ability to achieve this.

_Prototypal inheritance_ is a mechanism that allows us to specify which object we want to extend.

For example, imagine we have a `car` object that describes the general properties of a car. 
To describe a specific car that belongs to someone, we can extend the current set of properties by adding new ones. 
We do this using a special property called `[[Prototype]]` and it's setter, `__proto__`. By default, the `[[Prototype]]` property is `null`, but we can assign a reference to a prototype object to it.

```javascript
let car = {
    model: "Audi A6",
    year: 2022,
    color: "cherry"
};

let registeredCar = {
    __proto__: car,
    owner: "Alex",
    numberPlate: "12AB345"
};

console.log(registeredCar.color);  // cherry
car.color = "black";
console.log(registeredCar.color);  // black
```

By setting the `car` object as the prototype of the `registeredCar` object, we have specified that when a property of the `registeredCar` object is accessed, and it does not exist, 
the search for that property will continue in the `car` object. This redirection occurs automatically.

In this way, more than two objects can be combined into a chain.

<div class="hint" title='"this" keyword in inheritance' >
  Don't forget that when a method is called, the <code>this</code> reference will still point to the object from which the method was invoked.

  ```javascript
  let car = {
    model: "Audi A6",
    year: 2022,
    color: "cherry",
    accident(){
      this.damaged = true;
    }
  };
  
  let registeredCar = {
    __proto__: car,
    owner: "Alex",
    numberPlate: "12AB345"
  };
  
  console.log(registeredCar);  // prints { owner: 'Alex', numberPlate: '12AB345' }
  
  registeredCar.accident();
  
  console.log(registeredCar);  // prints { owner: 'Alex', numberPlate: '12AB345', damaged: true }
  ```
  
  Therefore, even though the `accident` method is declared inside the `car` object, when it is called on the `registeredCar` object, 
  the `damaged` property will be set exactly on the `registeredCar` object.
</div>

You can read more about inheritance and the prototype chain [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

### Task
You are given a `car` object that contains information about a car, and a `registeredCar` object that extends the `car` object with additional details such as the license plate number and owner.

You need to declare a `hiredCar` object using the `registeredCar` object as its prototype and add a `lessee` attribute with the value `"Jacob"`.
