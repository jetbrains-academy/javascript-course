const rewire = require('rewire');
const console = require("node:console");
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')

const consoleOutput = [];

beforeAll(() => {
    let originalConsoleLog = console["log"];
    const storeLog = inputs => consoleOutput.push(inputs);
    console.log = jest.fn(storeLog);

    rewire('../task');
    require('../task');

    console.log = originalConsoleLog
});


test('check if result is a string', () => {
    try {
        const task = rewire('../task');
        const result = task.__get__('result');
        expect(typeof result).toBe('string');
    } catch (e) {
        customizeError(e, 'The variable `result` should be a string. Please ensure you are concatenating a string and a number.', true);
        throw e;
    }
});

test('check if result is "105"', () => {
    try {
        const task = rewire('../task');
        const result = task.__get__('result');
        expect(result).toBe('105');
    } catch (e) {
        customizeError(e, 'The variable `result` should be "105". Please ensure you are concatenating the string "10" and the number 5.', true);
        throw e;
    }
});
