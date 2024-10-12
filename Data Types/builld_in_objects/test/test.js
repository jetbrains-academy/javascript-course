const rewire = require('rewire');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
let testedFunction;
let consoleOutput = [];
const mockedLog = output => consoleOutput.push(output);

beforeAll(() => {
    try {
        const task = rewire('../task');
        testedFunction = task.__get__('analyzeString')
    }
    catch (e) {
        customizeError(e, 'Check if you have defined analyzeString function', true)
        throw e
    }
    try {
        consoleOutput = [];
        console.log = mockedLog;
    } catch (e) {
        customizeError(e, 'Check if you have defined the car object', true)
        throw e
    }

});

afterAll(() => {
    console.log = console.__proto__.log; // Restore console.log
});

test('test if there is length', () => {
    const task = rewire('../task'); // Rewire the task module to capture its console output
    task.__get__('analyzeString')("JavaScript is an amazing language");
    const actualOutput = console["log"]
    const expectedOutput = [
        "Length: 30",
        "Uppercase: JAVASCRIPT IS AN AMAZING LANGUAGE",
        "Replaced 'a' with '@': J@v@Script is @n @m@zing l@ngu@ge",
        "Array of words: [ 'JavaScript', 'is', 'an', 'amazing', 'language' ]"
    ];
    try {
        expect(consoleOutput).toContain("Length: 30");
    } catch (e){
        customizeError(e, 'Check if you have defined the manufacturer property', true)
        throw e
    }
});
