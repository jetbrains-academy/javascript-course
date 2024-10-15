const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    arrayMax = import_variable(task, 'arrayMax');
});

test('Check given examples', () => {
    try {
        expect(arrayMax([-2, 6, 14, 4, 50, -11, 1])).toBe(50)
        expect(arrayMax([6, 1, 2, 3, 4, 5])).toBe(6)
        expect(arrayMax([-4, -3, -2, -1, 0])).toBe(0)
    } catch (e){
        customizeError(e, 'Check the examples that are given in task.js', true)
        throw e
    }
});

test('Check all negatives', () => {
    try {
        expect(arrayMax([-20, -10, -30])).toBe(-10)
    } catch (e){
        customizeError(e, 'Wrong answer when all elements are negative', true)
        throw e
    }
});

test('Check all equals', () => {
    try {
        expect(arrayMax([-1, -1, -1])).toBe(-1)
    } catch (e){
        customizeError(e, 'Wrong answer when all elements are equal', true)
        throw e
    }
});
