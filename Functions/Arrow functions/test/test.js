const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    max = importByName(task, 'max');
});

test('Check default examples', () => {
    try {
        expect(max( 15,  25)).toBe(25)
        expect(max(-15, -25)).toBe(-15)
        expect(max(  7,   7)).toBe(7)
    } catch (e){
        customizeError(e, 'Make sure the examples from task.js work. You can run task.js manually.', true)
        throw e
    }
});

test('Check equal values', () => {
    try {
        expect(max(-50, -50)).toBe(-50)
    } catch (e){
        customizeError(e, 'max(-50, -50) result should be -50', true)
        throw e
    }
});

test('Check both zeros', () => {
    try {
        expect(max(0, 0)).toBe(0)
    } catch (e){
        customizeError(e, 'max(0, 0) result should be 0', true)
        throw e
    }
});