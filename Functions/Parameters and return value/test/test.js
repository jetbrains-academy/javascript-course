const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    isRectangular = import_variable(task, 'isRectangular');
});

test('Check default examples', () => {
    try {
        expect(isRectangular(3,4,5)).toBe(true)
        expect(isRectangular(4,5,3)).toBe(true)
        expect(isRectangular(5,3,4)).toBe(true)
        expect(isRectangular(4,3,4)).toBe(false)
    } catch (e){
        customizeError(e, 'Make sure the examples from task.js works. You can run task.js manually.', true)
        throw e
    }
});

test('Check equals sides', () => {
    try {
        expect(isRectangular(2,2,2)).toBe(false)
        expect(isRectangular(1000,1000,1000)).toBe(false)
    } catch (e){
        customizeError(e, 'A triangle with equal sides is not a rectangular triangle.', true)
        throw e
    }
})

test('Check custom triangle', () => {
    try {
        expect(isRectangular(20,48,52)).toBe(true)
    } catch (e){
        customizeError(e, 'A triangle with sides 20, 48, 52 is rectangular', true)
        throw e
    }
})