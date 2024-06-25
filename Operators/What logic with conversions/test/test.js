const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    data = import_variable(task, 'data');
});


test('Check data.a or data.b value', () => {
    try {
        expect(!!(data.a || data.b)).toBe(true)
    } catch (e){
        customizeError(e, `Wrong value of data.a || data.b`, true)
        throw e
    }
});

test('Check data.b', () => {
    try {
        expect(!!data.b).toBe(true)
    } catch (e){
        customizeError(e, `Wrong value of data.b`, true)
        throw e
    }
});

test('Check !data.c value', () => {
    try {
        expect(!data.c).toBe(true)
    } catch (e){
        customizeError(e, `Wrong value of !data.c`, true)
        throw e
    }
});

test ('All values are used', () => {
    try {
        expect(data.b).toBe(-2)
        let allUsed = (data.a === null && data.c === "") ||
            (data.a === "" && data.c === null)
        expect(allUsed).toBe(true)
    } catch (e){
        customizeError(e, `Each value should be used only once`, true)
        throw e
    }
})
