function arrayMax(array){
    let maxVal = array[0];

    for (const elem of array){
        if(elem > maxVal)
            maxVal = elem;
    }

    return maxVal;
}

let array = [-2, 6, 14, 4, 50, -11, 1];
console.log(arrayMax(array));  // 50

array = [6, 1, 2, 3, 4, 5];
console.log(arrayMax(array));  // 6

array = [-4, -3, -2, -1, 0];
console.log(arrayMax(array));  // 0