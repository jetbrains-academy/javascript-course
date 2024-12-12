const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    disc = importByName(task, 'disc');
});

test('Check disc value', () => {
    try {
        expect(disc).toBe(-211)
    } catch (e){
        customizeError(e, 'Discriminant value is wrong', true)
        throw e
    }
});
