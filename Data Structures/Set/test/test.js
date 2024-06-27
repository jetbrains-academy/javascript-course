const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')



beforeAll(() => {
    try {
        names = task.__get__('names');
    }
    catch (e) {
        let errorToShow = new Error('Checkout that Set with name "names" is declared in the task.js');
        errorToShow.stack = null;
        throw errorToShow;
    }
});

test('Check Ron', () => {
    try {
        expect(names.has("Ron")).toBe(true)
    } catch (e){
        customizeError(e, 'The value "Ron" should be in the set', true)
        throw e
    }
});

test('Check Harry', () => {
    try {
        expect(names.has("Harry")).toBe(true)

    } catch (e){
        customizeError(e, 'The value "Harry" should be in the set', true)
        throw e
    }
});
