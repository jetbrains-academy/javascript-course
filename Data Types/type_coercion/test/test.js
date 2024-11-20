const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')


beforeAll(() => {
    a = importByName(task, 'a');
    b = importByName(task, 'b');
    sum = importByName(task, 'sum');
});

test('Check a and b types', () => {
    try {
        expect(typeof(a)).toEqual('string');
        expect(typeof(b)).toEqual('string');
    }
    catch (e) {
        customizeError(e, 'Do not change declarations of variables a and b', true)
        throw e
    }
});

test('Check sum type', () => {
    try {
        expect(typeof(sum)).toEqual('number');
    }
    catch (e) {
        customizeError(e, 'Variable sum should be a number', true)
        throw e
    }
});

test('Check sum value', () => {
    try {
        expect(sum).toEqual(4355055123);
    }
    catch (e) {
        customizeError(e, 'Convert first a and b to numbers before addition', true)
        throw e
    }
});

