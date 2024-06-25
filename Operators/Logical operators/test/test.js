const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    grantAccess = import_variable(task, 'grantAccess');
});

test('Check grantAccess', () => {
    try {
        expect(grantAccess).toBe(true)
    } catch (e){
        customizeError(e, `Wrong value of grantAccess`, true)
        throw e
    }
});
