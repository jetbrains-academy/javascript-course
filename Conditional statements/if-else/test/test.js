const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    heartRate = import_variable(task, 'heartRate');
    message = import_variable(task, 'message');
});


test('Check heartRate', () => {
    try {
        expect(heartRate).toBe(165)
    } catch (e){
        customizeError(e, `Do not modify heartRate variable`, true)
        throw e
    }
});

test('Check message', () => {
    try {
        expect(message).toBe("Hard")
    } catch (e){
        customizeError(e, `For this heartRate message should be "Hard"`, true)
        throw e
    }
});
