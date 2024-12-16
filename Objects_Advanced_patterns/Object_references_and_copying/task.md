We've already talked a lot about objects and how to work with them in the [Data Types](course://Data Types) and [Data Structures](course://Data Structures) lessons. 
However, we haven't yet covered the topic of copying objects.

When it comes to copying primitive types, the process is straightforward. We get two variables, each storing its own value.

```javascript
let name = "John"

// copying the name to another variable
let login = name

// changing the original value of the variable
name = "Bob"

console.log(name)  // Bob
console.log(login) // John
```

However, if we perform this operation with an object, the result might surprise us.

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

This happens because, in the case of objects, the variable does not store the actual value but rather a reference to it. As a result, when performing the assignment `lastLoggedIn = user`, it is not the object's value that gets copied, but only the reference to it.
![alt_text](two_ref_one_obj.png)

However, we don't always want this behavior, and, fortunately, JavaScript provides a way to create a copy of an object rather than just a reference to it.
While this can be done manually by iterating through all the fields of one object and assigning them to another, there is a more convenient way: using the `Object.assign()` method.

The method takes the _target_ object as its first argument and one or more _source_ objects as subsequent arguments.
As a result, all attributes from the _source_ object(s) are copied to the _target_ object. If the _target_ object already contains attributes with the same name, their values will be overwritten.

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
Since the badges differ only by the participant's name, you decided to make a template containing all the common fields and then use the `createBadge` function. 
The function takes the template as its first parameter and the participant's name as its second parameter. 
As a result, it should return a new badge containing all the attributes from the `template`, with the `name` attribute set to the provided `participantName`.

However, the program currently does not create a new object and is not working correctly. Fix the `createBadge` function so that it creates a new object each time, combining the attributes from the `template` along with the `name` specified in `participantName`.
