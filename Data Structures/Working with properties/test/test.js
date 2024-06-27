const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')



beforeAll(() => {
    try {
        car = task.__get__('car');
    }
    catch (e) {
        let errorToShow = new Error('Checkout that object with name car is defined in the task.js');
        errorToShow.stack = null;
        throw errorToShow;
    }
});

test('Check price attribute', () => {
    try {
        expect(car.price).toBe(9250)
    } catch (e){
        customizeError(e, 'price attribute\'s value is wrong', true)
        throw e
    }
});

test('Check currency attribute', () => {
    try {
        expect(car.currency).toBe("USD")
    } catch (e){
        customizeError(e, 'currency attribute\'s value is wrong', true)
        throw e
    }
});

test('Check owner attribute', () => {
    try {

        expect(car.hasOwnProperty("owner")).toBe(false)
    } catch (e){
        customizeError(e, 'Attribute "owner" should be deleted', true)
        throw e
    }
});
