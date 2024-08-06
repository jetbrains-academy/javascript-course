const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    dayOfWeek = import_variable(task, 'dayOfWeek');
    isWeekend = import_variable(task, 'isWeekend');
});


test('Check dayOfWeek', () => {
    try {
        expect(dayOfWeek).toBe("Sunday")
    } catch (e){
        customizeError(e, `Do not modify the dayOfWeek variable`, true)
        throw e
    }
});

test('Check isWeekend', () => {
    try {
        expect(isWeekend).toBe(true)
    } catch (e){
        customizeError(e, `For this dayOfWeek value, isWeekend should be true`, true)
        throw e
    }
});
