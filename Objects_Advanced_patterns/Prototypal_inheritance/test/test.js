const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    car = importByName(task, 'car');
    registeredCar = importByName(task, 'registeredCar');
    hiredCar = importByName(task, 'hiredCar');
});

test('Check given examples', () => {
    try {
        expect(hiredCar.model).toBe("Audi A6")
        expect(hiredCar.owner).toBe("Alex")
        expect(hiredCar.lessee).toBe("Jacob")
    } catch (e){
        customizeError(e, 'Make sure the example program output is correct.', true)
        throw e
    }
});

test('Check extra example', () => {
    try {
        car.year = 1998
        registeredCar.numberPlate = "00AA000"
        expect(hiredCar.year).toBe(1998)
        expect(hiredCar.numberPlate).toBe("00AA000")
    } catch (e){
        customizeError(e, 'Make sure `hiredCar` object is using `registeredCar` as a prototype.', true)
        throw e
    }
});
