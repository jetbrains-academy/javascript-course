const rewire = require('rewire');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')
task = rewire('../task.js');
let car;

beforeAll(() => {
    try {
        car = import_variable(task, 'car');
        expect(car).toBeDefined();
        expect(typeof car).toBe('object');
    } catch (e) {
        customizeError(e, 'Check if you have defined the car object', true)
        throw e
    }

});

test('test if there is manufacturer property', () => {
    try {
        expect(car).toHaveProperty("manufacturer");
    } catch (e){
        customizeError(e, 'Check if you have defined the manufacturer property', true)
        throw e
    }
});

test('test if there is model property', () => {
    try {
        expect(car).toHaveProperty("model");
    } catch (e){
        customizeError(e, 'Check if you have defined the model property', true)
        throw e
    }
});

test('test if there is year property', () => {
    try {
        expect(car).toHaveProperty("year");
    } catch (e){
        customizeError(e, 'Check if you have defined the year property', true)
        throw e
    }
});
