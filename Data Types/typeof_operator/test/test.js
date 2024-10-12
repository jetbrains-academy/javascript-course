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

test('check if number is printed', () => {
    try {
        joinedOutput = consoleOutput[0];
        expect(joinedOutput).toEqual("number");
    } catch (e){
        customizeError(e, 'Check if you are printing the type of number', true)
        throw e
    }
});

test('check if string is printed', () => {
    try {
        joinedOutput = consoleOutput[1];
        expect(joinedOutput).toEqual("string");
    } catch (e){
        customizeError(e, 'Check if you are printing the type of string', true)
        throw e
    }
});

test('check if boolean is printed', () => {
    try {
        joinedOutput = consoleOutput[2];
        expect(joinedOutput).toEqual("boolean");
    } catch (e){
        customizeError(e, 'Check if you are printing the type of boolean', true)
        throw e
    }
});
