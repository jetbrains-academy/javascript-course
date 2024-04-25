const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')

try {
    mySum = task.__get__('mySum');
}
catch (e) {
    let errorToShow = new Error('Checkout that function mySum is defined in the task.js');
    errorToShow.stack = null;
    throw errorToShow;
}

test('Returns 2 for input 1 1', () => {
    try {
        expect(mySum(1, 1)).toBe(2)
    } catch (e){
        customizeError(e, 'mySum(1,1) should returns 2', true)
        throw e
    }
});
