const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    grantAccess = importByName(task, 'grantAccess');
});


test('Check grantAccess', () => {
    try {
        expect(grantAccess).toBe(true)
    } catch (e){
        customizeError(e, `Wrong value of grantAccess`, true)
        throw e
    }
});
