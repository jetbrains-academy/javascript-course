const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')

try {
    deliveryAddress = task.__get__('deliveryAddress');
}
catch (e) {
    let errorToShow = new Error('Checkout that deliveryAddress variable declared in the task.js');
    errorToShow.stack = null;
    throw errorToShow;
}

test('deliveryAddress equals to harryAddress', () => {
    try {
        expect(deliveryAddress).toBe('4 Privet Drive, Little Whinging, Surrey')
    } catch (e){
        customizeError(e, 'deliveryAddress should be equals to harryAddress', true)
        throw e
    }
});
