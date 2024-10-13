const coerceTypes = require('../task');
const rewire = require("rewire");
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')

let consoleOutput = [];
const originalConsoleLog = console.log;


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

test('Check if string and number coercion is implemented correctly', () => {
    actualResult = coerceTypes('5', 3);
    expectedResult =8;
    try {
        expect(actualResult).toEqual(expectedResult);
    }
    catch (e) {
        customizeError(e, 'Check if the coerceTypes is implemented correctly', true)
        throw e
    }
});

test('Check if string to number coercion  is implemented correctly', () => {
    actualResult = coerceTypes('5', '3');
    expectedResult = 8;
    try {
        expect(actualResult).toEqual(expectedResult);
    }
    catch (e) {
        customizeError(e, 'Check if the coerceTypes is implemented correctly', true)
        throw e
    }
});

test('Check if bool coercion is implemented correctly', () => {
    actualResult = coerceTypes(true, true);
    expectedResult = 2;
    try {
        expect(actualResult).toEqual(expectedResult);
    }
    catch (e) {
        customizeError(e, 'Check if coerceTypes is implemented correctly', true)
        throw e
    }
});

