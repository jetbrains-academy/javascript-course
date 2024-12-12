const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    subscription = importByName(task, 'subscription');
});

test('Check valueOf method', () => {
    try {
        expect(+subscription).not.toBeNaN()
    } catch (e){
        customizeError(e, 'Probably the valueOf method is not implemented', true)
        throw e
    }
});

test('Check original subscription object', () => {
    try {
        expect(+subscription).toEqual(75)
    } catch (e){
        customizeError(e, 'Wrong answer for original `subscription` object', true)
        throw e
    }
});

test('Check original subscription object', () => {
    try {
        subscription.pricePerMonth = 100;
        subscription.month = 12
        expect(+subscription).toEqual(1200)
    } catch (e){
        customizeError(e, 'Wrong answer for 12 month and pricePerMonth equals 100', true)
        throw e
    }
});
