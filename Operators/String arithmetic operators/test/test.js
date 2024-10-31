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

test('capture console output of task.js', () => {
    try {
        joinedOutput = consoleOutput.join('\n');
        expect(joinedOutput).toEqual("Peter Benjamin Parker, 20 years old, Empire State University");
    } catch (e){
        customizeError(e, 'Output is wrong', true)
        throw e
    }
});
