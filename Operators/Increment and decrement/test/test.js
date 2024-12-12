const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    a = importByName(task, 'a');
    b = importByName(task, 'b');
    c = importByName(task, 'c');
});

test('Check variable a', () => {
    try {
        expect(a).toBe(11)
    } catch (e){
        customizeError(e, 'Wrong value of "a" variable', true)
        throw e
    }
});

test('Check variable b', () => {
    try {
        expect(b).toBe(9)
    } catch (e){
        customizeError(e, 'Wrong value of "b" variable', true)
        throw e
    }
});

test('Check variable c', () => {
    try {
        expect(c).toBe(9)
    } catch (e){
        customizeError(e, 'Wrong value of "c" variable', true)
        throw e
    }
});
