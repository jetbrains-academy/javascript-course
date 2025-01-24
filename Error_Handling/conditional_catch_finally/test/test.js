const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    toStringExplanation = importByName(task, 'toStringExplanation');
});

test('Check given examples', () => {
    try {
        expect(toStringExplanation(10, 2)).toBe("1010");
        expect(toStringExplanation(10, -2)).toBe("Radix is less than 2 or greater than 36");
        expect(toStringExplanation(null, 2)).toBe("Method is invoked on an object that is not a Number");
    } catch (e){
        customizeError(e, 'Make sure the example program output is correct.', true)
        throw e
    }
});

test('Check extra example', () => {
    try {
        expect(toStringExplanation(1023, 16)).toBe("3ff");
    } catch (e){
        customizeError(e, 'Check toStringExplanation for number 1024 and radix 16.', true)
        throw e
    }
});
