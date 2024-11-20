We already know from the previous task how we can copy the attributes of one object to another, 
but this again may not work as we expect when the attributes are also objects or when we make a copy of a more complex data structure.

```javascript
let arr = [
    {name: "Alice"},
    {name: "Bob"},
]

let arr1 = []
Object.assign(arr1, arr)

arr[0].name = "Dave"  // change in the original array

console.log(arr1)  // [ { name: 'Dave' }, { name: 'Bob' } ]
```

If we need to copy a complex object, including all its nested properties, better to use the `structuredClone()` function. You can find more details about this function [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone). 

```javascript
arr1 = structuredClone(arr)

arr[0].name = "Dave"

console.log(arr1)  // [ { name: 'Alice' }, { name: 'Bob' } ]
```

This approach is called a [deep copy](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy).

### Task
This time you need to order T-shirts for the participants of the conference and for this you need to create an array with objects containing the name of the participant, size and color of the T-shirt.

The `addToOrder` function takes the `orders` array as the first parameter and the `tShirt` information as the second and should add this item to the array. 
However, it does not work correctly and all array elements have the `tShirt` attribute with a reference to the same object.

Fix the function so that the output of the program corresponds to the expected output and all the participants of the conference receive T-shirts of the right size.
