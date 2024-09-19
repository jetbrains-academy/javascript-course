const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    summarizer = import_variable(task, 'summarizer');
});

test('Check summarizer is defined', () => {
    try {
        expect(summarizer).toBeDefined()
    } catch (e){
        customizeError(e, 'Do not forget to initialize the summarizer variable.', true)
        throw e
    }
});

test('Check original function name', () => {
    try {
        let original_name = summarizer.name
        expect(original_name).toBe("add")
    } catch (e){
        customizeError(e, 'Assign the value of the add variable to the summarizer variable.', true)
        throw e
    }
});

test('Check function', () => {
    try {
        expect(summarizer(50, -70)).toBe(-20)
    } catch (e){
        customizeError(e, 'Do not modify the original `add` function. add(50, -70) should be -20', true)
        throw e
    }
});