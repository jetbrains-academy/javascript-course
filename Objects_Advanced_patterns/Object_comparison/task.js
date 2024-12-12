const _ = require('lodash');

let cars = [
    {
        model: 'Volkswagen Golf',
        year: 2016
    },
    {
        model: 'Audi A6',
        year: 2022
    },
    {
        model: 'Volvo XC70',
        year: 2015
    },
    {
        model: 'Audi A6',
        year: 2022
    },
]

function countCars(cars, car) {
    let count = 0
    for(let i of cars){
        if(_.isEqual(i, car)){
            count++
        }
    }
    return count
}

let car = {
    model: 'Audi A6',
    year: 2022
}

console.log(countCars(cars, car))  // should print "2"
