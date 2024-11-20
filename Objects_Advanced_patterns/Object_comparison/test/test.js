const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    countCars = importByName(task, 'countCars');
});

test('Check original case', () => {
    try {
        let carsTest = [
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
        let carTest = {
            model: 'Audi A6',
            year: 2022
        }
        expect(countCars(carsTest, carTest)).toBe(2)
    } catch (e){
        customizeError(e, 'Make sure the example program output is correct', true)
        throw e
    }
});

test('Check other structure', () => {
    try {
        let carsTest = [
            {
                model: 'Audi A6',
                year: 2022,
                color: 'red',
            },
            {
                model: 'Volkswagen Golf',
                year: 2016,
                color: 'red',
            },
            {
                model: 'Audi A6',
                year: 2022,
                color: 'red',
            },
            {
                model: 'Volvo XC70',
                year: 2015,
                color: 'red',
            },
            {
                model: 'Audi A6',
                year: 2022,
                color: 'red',
            },
        ]
        let carTest = {
            model: 'Audi A6',
            year: 2022,
            color: 'red',
        }
        expect(countCars(carsTest, carTest)).toBe(3)
    } catch (e){
        customizeError(e, 'Use the `_.isEqual()` method. This will keep the program working when new attributes are added.', true)
        throw e
    }
});
