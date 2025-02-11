const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    arrayProcessor = importByName(task, 'arrayProcessor');
});

test('Check correct examples', () => {
    try {
        let arr = [1, 2, 3, 4, 5];

        arrayProcessor(arr, (x) => x * 2);
        expect(arr).toEqual([2, 4, 6, 8, 10]);

        arrayProcessor(arr, (x) => -x);
        expect(arr).toEqual([-2, -4, -6, -8, -10]);

        arrayProcessor(arr, (x) => x ** 2);
        expect(arr).toEqual([4, 16, 36, 64, 100]);
    } catch (e) {
        customizeError(e, 'Make sure the examples from task.js work correctly.', true);
        throw e
    }
});

test('Check other callback', () => {
    try {
        let arr = [10, 20, 30, 40, 50];

        arrayProcessor(arr, (x) => x / 2);
        expect(arr).toEqual([5, 10, 15, 20, 25]);
    } catch (e) {
        customizeError(e, 'Make sure handling other callbacks such as division by 2 works correctly.', true);
        throw e
    }
});
