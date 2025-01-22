function medalsFilter(medals, count) {
    let result = [];  // array for keys that satisfy the condition

    for(key in medals) {
        if(medals[key] > count) {
            result.push(key);
        }
    }

    return result;
}

let medals = {
    usa: 113,
    china: 89,
    australia: 46,
    japan: 58,
    greatBritain: 64,
    canada: 24
};

console.log(medalsFilter(medals, 60));  // [ 'usa', 'china', 'greatBritain' ]