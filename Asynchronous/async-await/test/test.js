const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    collector = importByName(task, 'collector');
    generator = importByName(task, 'generator');
});

test('Check correct examples', async () => {
    try {
        await collector(generator(100), generator(200)).then((result) => {
            expect(result).toEqual([100, 200]);
        });
    } catch (e) {
        customizeError(e, 'Make sure the examples from task.js work correctly.', true);
        throw e;
    }

});

test('Check with other numbers', async () => {
    try {
        await collector(generator(300), generator(400)).then((result) => {
            expect(result).toEqual([300, 400]);
        });
    } catch (e) {
        customizeError(e, 'Ensure the collector function works for other numbers.', true);
        throw e;
    }
});

test('Check with reversed order and delays', async () => {
    try {
        // Testing where the second number is smaller to ensure ordering in the array
        await collector(generator(500), generator(100)).then((result) => {
            expect(result).toEqual([500, 100]); // Check that the output order matches the input
        });
    } catch (e) {
        customizeError(e, 'Ensure the collector function preserves the order of the input promises.', true);
        throw e;
    }
});
