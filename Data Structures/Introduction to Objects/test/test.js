const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')



beforeAll(() => {
    try {
        student = task.__get__('student');
    }
    catch (e) {
        let errorToShow = new Error('Checkout that object with name student is defined in the task.js');
        errorToShow.stack = null;
        throw errorToShow;
    }
});

test('Check name attribute', () => {
    try {
        expect(student.name).toBe("Bob")

    } catch (e){
        customizeError(e, 'name attribute\'s value should be "Bob"', true)
        throw e
    }
});

test('Check age attribute', () => {
    try {
        expect(student.age).toBe(21)

    } catch (e){
        customizeError(e, 'age attribute\'s value should be 21', true)
        throw e
    }
});

test('Check averageGrade attribute', () => {
    try {
        expect(student.averageGrade).toBe(4.28)

    } catch (e){
        customizeError(e, 'averageGrade attribute\'s value should be 4.28', true)
        throw e
    }
});