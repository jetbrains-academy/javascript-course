function maxNegRow(matrix){
    let negatives = [];

    for (const row of matrix){
        for (const elem of row){
            if (elem < 0){
                negatives.push(elem);
                break;
            }
        }
    }

    return arrayMax(negatives);
}

let matrix = [
    [-5,  -1, 14],
    [2,  -45, 35],
    [17, 37, -20],
    [-7,  30, -25]
];

console.log(maxNegRow(matrix));  // -5

function arrayMax(array){
    let max = array[0];
    for (const elem of array){
        if(elem > max)
            max = elem;
    }
    return max;
}
