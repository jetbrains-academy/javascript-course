As we discussed earlier, array elements can be objects of any type, even other arrays!
We can use this to store multidimensional arrays. The simplest example of using such arrays is a matrix.

It can be daunting at first, but don't worry too much about it right away. Consider nested arrays as black boxes until you need to look inside them. 

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);  // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(matrix.length); // 3
```

Let's break it down with an example. `matrix` is just an array with `3` elements. Let's get the last element of this array. The last element of the `matrix` array is… an array containing `[ 7, 8, 9 ]`.

```javascript
console.log(matrix[2]);  // [ 7, 8, 9 ]
```

The beauty of this is that we can immediately use the result of the `matrix[2]` expression to access the element of the nested array.

```javascript
console.log(matrix[2][1]);  // 8
```

### Task
Replace the element `999` in `matrix` with `777`.

<div class="hint">
  You can use the <code>length</code> attribute of outside and nested arrays and avoid manually calculating indexes.
</div>

