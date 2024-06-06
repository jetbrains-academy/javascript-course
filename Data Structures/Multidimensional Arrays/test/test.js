const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')



beforeAll(() => {
    try {
        matrix = task.__get__('matrix');
    }
    catch (e) {
        let errorToShow = new Error('Checkout that array with name matrix is defined in the task.js');
        errorToShow.stack = null;
        throw errorToShow;
    }
});

test('Check matrix element', () => {
    try {
        expect(matrix[matrix.length - 1][matrix[matrix.length - 1].length-1]).toBe(777)

    } catch (e){
        customizeError(e, 'Element 999 in matrix wasn\'t replaced with 777', true)
        throw e
    }
});
