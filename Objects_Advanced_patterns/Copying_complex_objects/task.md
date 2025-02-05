We already know from the previous task how to copy the attributes of one object to another. 
However, this approach may not work as expected when the attributes themselves are objects or when dealing with more complex data structures.

```javascript
let arr = [
    {name: "Alice"},
    {name: "Bob"},
];

let arr1 = [];
Object.assign(arr1, arr);

arr[0].name = "Dave";  // change in the original array

console.log(arr1);  // [ { name: 'Dave' }, { name: 'Bob' } ]
```

If we need to copy a complex object, including all its nested properties, it is better to use the `structuredClone()` function. You can find more details about this function [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone). 

```javascript
arr1 = structuredClone(arr);

arr[0].name = "Dave";

console.log(arr1);  // [ { name: 'Alice' }, { name: 'Bob' } ]
```

This approach is called a [deep copy](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy).

### Task
This time, you need to order T-shirts for the participants of the conference. To do this, create an array of objects, where each object contains the participant's name, the size, and the color of their T-shirt.

The `addToOrder` function takes the `orders` array as its first parameter and the `tShirt` information as its second parameter. It should add the item to the array. 
However, the function does not work correctly, as all array elements share the same `tShirt` object reference.

Fix the function so that the program's output matches the expected result, ensuring that all the participants of the conference receive T-shirts of the right size.
