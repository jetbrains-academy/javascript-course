const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    n = importByName(task, 'n');
    nAbs = importByName(task, 'nAbs');
});


test('Check n', () => {
    try {
        expect(n).toBe(-20)
    } catch (e){
        customizeError(e, `Do not modify the n variable`, true)
        throw e
    }
});

test('Check nAbs', () => {
    try {
        expect(nAbs).toBe(20)
    } catch (e){
        customizeError(e, `For this n, the value of nAbs should be 20`, true)
        throw e
    }
});
