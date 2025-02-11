const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    delayedGreeter = importByName(task, 'delayedGreeter');
});

test('Check correct examples', async () => {
    try {
        // Valid example with a name
        await delayedGreeter("John").then((value) => {
            expect(value).toBe("Hello, John");
        });

        // Example with a null name, should reject
        await delayedGreeter(null).catch((error) => {
            expect(error.message).toBe("Name is required");
        });
    } catch (e) {
        customizeError(e, 'Make sure the examples from task.js work correctly.', true);
        throw e;
    }

});

test('Check with another valid name', async () => {
    try {
        // Valid test case with a different name
        await delayedGreeter("Alice").then((value) => {
            expect(value).toBe("Hello, Alice");
        });
    } catch (e) {
        customizeError(e, 'Make sure delayedGreeter works correctly for any valid name.', true);
        throw e;
    }
});
