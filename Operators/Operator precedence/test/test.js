const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    result = importByName(task, 'result')
});

test('Check result value', () => {
    try {
        expect(result).toBe(74)
    } catch (e){
        customizeError(e, 'Place brackets in the expression to get 74 as a result', true)
        throw e
    }
});
