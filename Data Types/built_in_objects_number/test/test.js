const rewire = require("rewire");
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')

let consoleOutput = [];
const originalConsoleLog = console.log;
const expectedOutput = [
    "String representation: 42.5",
    "Is integer: false",
    "Parsed integer: 42"
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

test('Check if string representation is implemented correctly', () => {
    try {
        expect(consoleOutput[0]).toEqual(expectedOutput[0]);
    }
    catch (e) {
        customizeError(e, 'Check if string representation is implemented correctly', true)
        throw e
    }
});

test('Check if the integer check is implemented correctly', () => {
    try {
        expect(consoleOutput[1]).toEqual(expectedOutput[1]);
    }
    catch (e) {
        customizeError(e, 'Check if the integer check is implemented correctly', true)
        throw e
    }
});

test('Check if parsed integer is implemented correctly', () => {
    try {
        expect(consoleOutput[2]).toEqual(expectedOutput[2]);
    }
    catch (e) {
        customizeError(e, 'Check if parsed integer is implemented correctly', true)
        throw e
    }
});

