var rewire = require('rewire');
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
    try {
        expect(mySum(1, 1)).toBe(2)
    } catch (e){
        e.message = e.message.replace(/.*\n/, 'mySum(1,1) should returns 2');
        throw e
    }
});
