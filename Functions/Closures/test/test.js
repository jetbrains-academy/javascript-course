const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    makeShowTemperature = importByName(task, 'makeShowTemperature');
});

test('Check Celsius', () => {
    try {
        let showTemperature = makeShowTemperature(false)
        expect(showTemperature(10)).toBe("The temperature is: 10 Celsius")
        expect(showTemperature(-50)).toBe("The temperature is: -50 Celsius")
    } catch (e){
        customizeError(e, 'Check the code for Celsius', true)
        throw e
    }
});

test('Check Fahrenheit', () => {
    try {
        let showTemperature = makeShowTemperature(true)
        expect(showTemperature(10)).toBe("The temperature is: 50 Fahrenheit")
        expect(showTemperature(-50)).toBe("The temperature is: -58 Fahrenheit")
        expect(showTemperature(0)).toBe("The temperature is: 32 Fahrenheit")
        expect(showTemperature(5)).toBe("The temperature is: 41 Fahrenheit")
    } catch (e){
        customizeError(e, 'Check the code for Fahrenheit, especially for negative values and zero', true)
        throw e
    }
});
