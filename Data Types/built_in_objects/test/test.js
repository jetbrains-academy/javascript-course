const rewire = require("rewire");
const console = require("node:console");
const utils = rewire('#utils/utils.js')
const customizeError = utils.__get__('customizeError')

let consoleOutput = [];
const originalConsoleLog = console.log;
const expectedOutput = [
    "Length: 33",
    "Uppercase: JAVASCRIPT IS AN AMAZING LANGUAGE",
    "Replaced 'a' with '@': J@v@Script is @n @m@zing l@ngu@ge"
];


beforeAll(() => {
    const storeLog = inputs => consoleOutput.push(inputs);
    console.log = jest.fn(storeLog);

    rewire('../task');
    require('../task');
});

afterAll(() => {
    console.log = originalConsoleLog;
});


test('Check if the length is implemented correctly', () => {
    try {
        expect(consoleOutput[0]).toEqual(expectedOutput[0]);
    }
    catch (e) {
        customizeError(e, 'Check if the length is implemented correctly', true)
        throw e
    }
});

test('Check if the Uppercase is implemented correctly', () => {
    try {
        expect(consoleOutput[1]).toEqual(expectedOutput[1]);
    }
    catch (e) {
        customizeError(e, 'Check if the Uppercase is implemented correctly', true)
        throw e
    }
});

test('Check if replace a with @ is implemented correctly', () => {
    try {
        expect(consoleOutput[2]).toEqual(expectedOutput[2]);
    }
    catch (e) {
        customizeError(e, 'Check if replace a with @ is implemented correctly', true)
        throw e
    }
});