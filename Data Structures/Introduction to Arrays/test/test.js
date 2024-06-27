const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')



beforeAll(() => {
    try {
        colors = task.__get__('colors');
    }
    catch (e) {
        let errorToShow = new Error('Checkout that array with name colors is defined in the task.js');
        errorToShow.stack = null;
        throw errorToShow;
    }
});

test('Check colors array', () => {
    try {
        expect(colors.toString()).toBe([ 'red', 'purple', 'green', 'yellow', 'pink', 'brown', 'black' ].toString())
    } catch (e){
        customizeError(e, 'Array contents is wrong', true)
        throw e
    }
});
