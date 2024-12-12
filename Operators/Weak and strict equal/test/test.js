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


test('Check a', () => {
    try {
        expect(a).toBe(undefined)
    } catch (e){
        customizeError(e, `Wrong value of a`, true)
        throw e
    }
});

test('Check b', () => {
    try {
        expect(b).toBe(0)
    } catch (e){
        customizeError(e, `Wrong value of b`, true)
        throw e
    }
});

test('Check c', () => {
    try {
        expect(c).toBe("")
    } catch (e){
        customizeError(e, `Wrong value of c`, true)
        throw e
    }
});
