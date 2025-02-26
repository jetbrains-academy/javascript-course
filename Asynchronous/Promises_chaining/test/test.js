const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    summarizeNumbers = importByName(task, 'summarizeNumbers');
    generateNumbersPromise = importByName(task, 'generateNumbersPromise');
});

test('Check correct examples', async () => {
    try {
        const numbersPromise = generateNumbersPromise();

        await summarizeNumbers(numbersPromise).then((result) => {
            expect(result).toBe(30); // The expected sum is 30
        });
    } catch (e) {
        customizeError(e, 'Make sure the examples from task.js work correctly.', true);
        throw e;
    }

});

test('Check with another promise containing numbers', async () => {
    try {
        const customNumbersPromise = new Promise((resolve) => {
            resolve([1, 2, 3, 4, 5, 6]);
        });

        await summarizeNumbers(customNumbersPromise).then((result) => {
            expect(result).toBe(21); // The expected sum is 21
        });
    } catch (e) {
        customizeError(e, 'Make sure summarizeNumbers works for other promises with different numbers.', true);
        throw e;
    }
});
