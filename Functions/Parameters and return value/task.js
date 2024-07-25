function isRectangular(side1, side2, side3){
    return side1**2 + side2**2 === side3**2 ||
        side1**2 + side3**2 === side2**2 ||
        side3**2 + side2**2 === side1**2;
}

console.log(isRectangular(3, 4, 5))  // true
console.log(isRectangular(4, 5, 3))  // true
console.log(isRectangular(5, 3, 4))  // true
console.log(isRectangular(4, 3, 4))  // false
