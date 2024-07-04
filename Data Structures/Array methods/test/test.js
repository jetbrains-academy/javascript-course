const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')



beforeAll(() => {
    try {
        numbers = task.__get__('numbers');
    }
    catch (e) {
        let errorToShow = new Error('Checkout that array with name numbers is defined in the task.js');
        errorToShow.stack = null;
        throw errorToShow;
    }
    try {
        answer = task.__get__('answer');
    }
    catch (e) {
        let errorToShow = new Error('Checkout that array with name answer is defined in the task.js');
        errorToShow.stack = null;
        throw errorToShow;
    }
});

test('Check numbers array', () => {
    try {
        expect(numbers.toString()).toBe([ 'Three', 'Four', 'Five'].toString())
    } catch (e){
        customizeError(e, 'numbers array contents is wrong', true)
        throw e
    }
});

test('Check answer array', () => {
    try {
        expect(answer.toString()).toBe([ 'Two', 'One'].toString())
    } catch (e){
        customizeError(e, 'answer array contents is wrong"', true)
        throw e
    }
});
