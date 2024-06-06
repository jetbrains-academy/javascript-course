As we discussed earlier, array elements can be objects of any type. Even other arrays!
We can use this to store multidimensional arrays. The simplest example of using such arrays is matrix.

It can be frightening at first, but don't worry about it too soon. Consider nested arrays as black boxes until you need to look inside them 

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix)  // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(matrix.length) // 3
```

Let's break it down with an example. `matrix` is just an array of `3` elements. Let's get the last element of this array. The last element of the matrix array is… array `[ 7, 8, 9 ]`

```javascript
console.log(matrix[2])  // [ 7, 8, 9 ]
```

The beauty of this is that we can immediately use result of `matrix[2]` expression and access the element of nested array.

```javascript
console.log(matrix[2][1])  // 8
```

### Task
Replace element `999` in `matrix` with `777`.

<div class="hint">
  You can use <code>length</code> attribute of outside and nested arrays and don’t calculate indexes by your hands.
</div>

