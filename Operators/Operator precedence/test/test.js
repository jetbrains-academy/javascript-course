const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    result = import_variable(task, 'result')
});

test('Check result value', () => {
    try {
        expect(result).toBe(74)
    } catch (e){
        customizeError(e, 'Place brackets in the expression to get 74 as a result', true)
        throw e
    }
});
