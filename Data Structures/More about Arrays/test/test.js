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

test('Check color', () => {
    try {
        expect(colors.at(-5)).toBe("black")

    } catch (e){
        customizeError(e, 'Fifth element from the end of the array should be "black"', true)
        throw e
    }
});
