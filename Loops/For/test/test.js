const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    arraySum = import_variable(task, 'arraySum');
});

test('Check given examples', () => {
    try {
        expect(arraySum([1, 2, 3, 4, 5])).toBe(15)
        expect(arraySum([-1, -2, 3, 4, 5])).toBe(9)
        expect(arraySum([-10, -20, 30])).toBe(0)
    } catch (e){
        customizeError(e, 'Check the examples that are given in task.js', true)
        throw e
    }
});

test('Check all negatives', () => {
    try {
        expect(arraySum([-1, -2, -33, -4, -5])).toBe(-45)
    } catch (e){
        customizeError(e, 'Wrong answer for arraySum([-1, -2, -33, -4, -5])', true)
        throw e
    }
});

test('Check all zeros', () => {
    try {
        expect(arraySum([0, 0, 0])).toBe(0)
    } catch (e){
        customizeError(e, 'Wrong answer for arraySum([0, 0, 0])', true)
        throw e
    }
});
