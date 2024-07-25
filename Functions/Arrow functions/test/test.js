const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    max = import_variable(task, 'max');
});

test('Check default examples', () => {
    try {
        expect(max( 15,  25)).toBe(25)
        expect(max(-15, -25)).toBe(-15)
        expect(max(  7,   7)).toBe(7)
    } catch (e){
        customizeError(e, 'Make sure the examples from task.js works. You can run task.js manually.', true)
        throw e
    }
});

test('Check equals values', () => {
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