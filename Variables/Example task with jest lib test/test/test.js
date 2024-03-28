var rewire = require('rewire');
const assert = require("assert");
var task = rewire('../task')

try {
    mySum = task.__get__('mySum');
}
catch (e) {
    var errorToShow = new Error('Checkout that function mySum is defined in the task.js');
    errorToShow.stack = null;
    throw errorToShow;
}

test('Returns 2 for input 1 1', () => {

    // as of Jest 27, the toBe matcher does not support custom error messages
    //expect(mySum(1, 1)).toBe(2, 'mySum(1,1) should returns 2')

    //assert.equal(mySum(1, 1),2,'mySum(1,1) should returns 2')

    const result = mySum(1, 1);
    if (result !== 2) {
        throw new Error(`Expected mySum(1, 1) returns 2, but received ${result}`);
    }
});
