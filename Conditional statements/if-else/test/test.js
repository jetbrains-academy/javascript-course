const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    heartRate = importByName(task, 'heartRate');
    message = importByName(task, 'message');
});


test('Check heartRate', () => {
    try {
        expect(heartRate).toBe(165)
    } catch (e){
        customizeError(e, `Do not modify the heartRate variable`, true)
        throw e
    }
});

test('Check message', () => {
    try {
        expect(message).toBe("Hard")
    } catch (e){
        customizeError(e, `For this heartRate, the message should be "Hard"`, true)
        throw e
    }
});
