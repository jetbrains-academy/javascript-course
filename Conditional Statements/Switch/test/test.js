const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    dayOfWeek = importByName(task, 'dayOfWeek');
    isWeekend = importByName(task, 'isWeekend');
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
