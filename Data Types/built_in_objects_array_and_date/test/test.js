const rewire = require("rewire");
const console = require("node:console");
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')

let consoleOutput = [];
const originalConsoleLog = console.log;
let date = new Date();
const expectedOutput = [
    "",
    "Year of the given date: " + date.getFullYear(),
    "Human-readable date string: "+  date.toDateString(),

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
        expect(consoleOutput[0]).toEqual("Current date and time: " + new Date().toString());
    }
    catch (e) {
        customizeError(e, 'Check if string representation is implemented correctly', true)
        throw e
    }
});

test('Check if the year is implemented correctly', () => {
    try {
        expect(consoleOutput[1]).toEqual(expectedOutput[1]);
    }
    catch (e) {
        customizeError(e, 'Check if the year is implemented correctly', true)
        throw e
    }
});

test('Check if human-readable format is implemented correctly', () => {
    try {
        expect(consoleOutput[2]).toEqual(expectedOutput[2]);
    }
    catch (e) {
        customizeError(e, 'Check if human-readable format is implemented correctly', true)
        throw e
    }
});

