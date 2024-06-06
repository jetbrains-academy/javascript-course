const rewire = require('rewire');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')


test('Checking of corrected errors', () => {
    try {
        const task = rewire('../task');
    } catch (e){
        e.stack = null
        throw e
    }
});
