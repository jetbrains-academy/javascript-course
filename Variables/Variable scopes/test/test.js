const rewire = require('rewire');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')

beforeAll(() => {
    try {
        task = rewire('../task');
    }
    catch (e) {
        e.stack = null
        throw e;
    }
});

test('Check left value', () => {
    try {
        left = task.__get__('left')
        expect(left).toBe(20)
    } catch (e){
        customizeError(e, 'Variable "left" has wrong value or been deleted', true)
        throw e
    }
});

test('Check right value', () => {
    try {
        right = task.__get__('right')
        expect(right).toBe(20)
    } catch (e){
        customizeError(e, 'Variable "right" has wrong value or been deleted', true)
        throw e
    }
});