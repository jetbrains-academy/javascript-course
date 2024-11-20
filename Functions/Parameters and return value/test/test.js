const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    isRightTriangle = importByName(task, 'isRightTriangle');
});

test('Check default examples', () => {
    try {
        expect(isRightTriangle(3,4,5)).toBe(true)
        expect(isRightTriangle(4,5,3)).toBe(true)
        expect(isRightTriangle(5,3,4)).toBe(true)
        expect(isRightTriangle(4,3,4)).toBe(false)
    } catch (e){
        customizeError(e, 'Make sure the examples from task.js work. You can run task.js manually.', true)
        throw e
    }
});

test('Check equal sides', () => {
    try {
        expect(isRightTriangle(2,2,2)).toBe(false)
        expect(isRightTriangle(1000,1000,1000)).toBe(false)
    } catch (e){
        customizeError(e, 'A triangle with equal sides is not a right triangle.', true)
        throw e
    }
})

test('Check custom triangle', () => {
    try {
        expect(isRightTriangle(20,48,52)).toBe(true)
    } catch (e){
        customizeError(e, 'A triangle with sides 20, 48 and 52 is a right triangle.', true)
        throw e
    }
})