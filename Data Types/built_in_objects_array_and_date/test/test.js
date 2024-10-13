const analyzeDate = require('../task');
const rewire = require("rewire");
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')

let consoleOutput = [];
const originalConsoleLog = console.log;
const expectedOutput = [
    "",
    "Year of the given date: 2023",
    "Human-readable date string: Mon Oct 09 2023",

];


beforeAll(() => {
    console.log = jest.fn((...args) => {
        consoleOutput.push(args.join(' '));
        originalConsoleLog(...args);
    });
});

afterAll(() => {
    console.log = originalConsoleLog;
});

beforeEach(() => {
    consoleOutput = [];
});

test('Check if string representation is implemented correctly', () => {
    analyzeDate(new Date('2023-10-09'));

    try {
        expect(consoleOutput[0]).toEqual("Current date and time: " + new Date().toString());
    }
    catch (e) {
        customizeError(e, 'Check if string representation is implemented correctly', true)
        throw e
    }
});

test('Check if the year is implemented correctly', () => {
    analyzeDate(new Date('2023-10-09'));

    try {
        expect(consoleOutput[1]).toEqual(expectedOutput[1]);
    }
    catch (e) {
        customizeError(e, 'Check if the year is implemented correctly', true)
        throw e
    }
});

test('Check if human-readable format is implemented correctly', () => {
    analyzeDate(new Date('2023-10-09'));

    try {
        expect(consoleOutput[2]).toEqual(expectedOutput[2]);
    }
    catch (e) {
        customizeError(e, 'Check if human-readable format is implemented correctly', true)
        throw e
    }
});

