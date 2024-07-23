const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    disc = import_variable(task, 'disc');
});

test('Check disc value', () => {
    try {
        expect(disc).toBe(-211)
    } catch (e){
        customizeError(e, 'Discriminant value is wrong', true)
        throw e
    }
});
