const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    Truck = importByName(task, 'Truck');
});

test('Check given examples', () => {
    try {
        let truck1 = new Truck("Ford", 2015, 7500);
        expect(truck1.brand).toBe("Ford");
        expect(truck1.year).toBe(2015);
        expect(truck1.getPayload()).toBe(7500);
        expect(truck1.getVehicleInfo()).toBe("Ford 2015");
    } catch (e){
        customizeError(e, 'Make sure the example program output is correct.', true)
        throw e
    }
});

test('Check extra example', () => {
    try {
        let truck2 = new Truck("Volvo", 2023, 12000);
        expect(truck2.brand).toBe("Volvo");
        expect(truck2.year).toBe(2023);
        expect(truck2.getPayload()).toBe(12000);
        expect(truck2.getVehicleInfo()).toBe("Volvo 2023");
    } catch (e){
        customizeError(e, 'Check your solution for Truck("Volvo", 2023, 12000)', true)
        throw e
    }
});
