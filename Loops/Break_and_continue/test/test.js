const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    maxNegRow = import_variable(task, 'maxNegRow');
});

test('Check given examples', () => {
    try {
        let matrix = [
            [-5,  -1, 14],
            [2,  -45, 35],
            [17, 37, -20],
            [-7,  30, -25]
        ];

        expect(maxNegRow(matrix)).toBe(-5)
    } catch (e){
        customizeError(e, 'Check the examples that are given in task.js', true)
        throw e
    }
});

test('Check last negatives', () => {
    try {
        let matrix = [
            [0,  0, -14],
            [0,  0, -35],
            [0, 0, -1],
        ];
        expect(maxNegRow(matrix)).toBe(-1)
    } catch (e){
        customizeError(e, 'Wrong answer when only the last elements in the row are negative', true)
        throw e
    }
});
