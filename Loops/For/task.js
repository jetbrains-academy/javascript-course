function arraySum(array){
    let sum  = 0

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }

    return sum;
}

console.log(arraySum([1, 2, 3, 4, 5]));   // 15
console.log(arraySum([-1, -2, 3, 4, 5])); // 9
console.log(arraySum([-10, -20, 30]));    // 0