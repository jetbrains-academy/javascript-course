const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')



beforeAll(() => {
    try {
        fruitWeights = task.__get__('fruitWeights');
    }
    catch (e) {
        let errorToShow = new Error('Checkout that map with name fruitWeights is defined in the task.js');
        errorToShow.stack = null;
        throw errorToShow;
    }
});

test('Check for Tomato', () => {
    try {
        expect(fruitWeights.has("Tomato")).toBe(false)

    } catch (e){
        customizeError(e, 'There should be no pair with the key "Tomato"', true)
        throw e
    }
});

test('Check for Pomelo', () => {
    try {
        expect(fruitWeights.get("Pomelo")).toBe(1.45)

    } catch (e){
        customizeError(e, 'Pomelo weight should be 1.45', true)
        throw e
    }
});
