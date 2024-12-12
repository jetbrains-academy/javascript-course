We've already talked a lot about objects and working with them in [Data Types](course://Data Types) and [Data Structures](course://Data Structures) lessons, 
but we haven't touched on the copying of objects.

When we copy primitive types, everything is clear. We get two variables, each of which stores its own value.

```javascript
let name = "John"

// copying the name to another variable
let login = name

// changing the original value of the variable
name = "Bob"

console.log(name)  // Bob
console.log(login) // John
```

But if we repeat this operation with an object, we will be very surprised by the result.

```javascript
let user = {
    name: "John"
}

let lastLoggedIn = user

// changing the original value of the property name 
user.name = "Bob";

console.log(user);         // { name: 'Bob' }
console.log(lastLoggedIn); // { name: 'Bob' }
```

This happens because in the case of objects, the variable stores not the value, but a reference to the actual value. Thus, when performing the assignment `lastLoggedIn = user`, not the value of the object is copied, but only the reference to it.
![alt_text](two_ref_one_obj.png)

But we don't always need this behavior and fortunately, JavaScript has a way to create a copy of an object, not just a reference.
This can be done manually, iterating through all the fields of one object and assigning them to another, but there is a more convenient way: use the method `Object.assign()`.

It takes the _target_ object as the first argument, and _source_ objects as the second (and subsequent if required).
As a result, all _source_ object attributes are copied to the _target_ object. In case there are already attributes with this name, the value is overwritten.

```javascript
let user= {
    name: "Bob"
}
let data = {
    name: "John",
    position: "developer"
}

Object.assign(user, data);

console.log(user);  // { name: 'John', position: 'developer' }
```

You can read more about the `Object.assign` method [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

### Task
You are creating badges for the participants of the JavaScript Day 2025 conference. 
Since the badges differ only in the participant's name, you decided to make a template containing all the common fields and then use the `createBadge` function. 
It takes the template as the first parameter and the participant name as the second parameter. 
As a result it should return a new badge containing all the attributes from `template`, but with the `name` attribute set to `participantName`.

Right now the program does not create a new object and is not working correctly. Fix the `createBadge` function so that it creates a new object each time with the attributes from `template` and the `name` specified in `participantName`.
