const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    Vehicle = importByName(task, 'Vehicle');
    Vehicle.fuelCapacity = 70
});

test('Check given examples', () => {
    try {
        let car = new Vehicle(35);
        car.fuel = 75
        car.fuel = -10
        expect(car.fuel).toBe(35)
        car.fuel = 70
        expect(car.fuel).toBe(70)
        Vehicle.fuelCapacity = 100
        car.fuel = 75
        expect(car.fuel).toBe(75)
    } catch (e){
        customizeError(e, 'Make sure the example program output is correct.', true)
        throw e
    }
});
