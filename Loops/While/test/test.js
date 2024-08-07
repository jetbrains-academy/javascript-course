const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    gcd = import_variable(task, 'gcd');
});

test('Check given examples', () => {
    try {
        expect(gcd(10 , 5)).toBe(5)
        expect(gcd(17 , 13)).toBe(1)
        expect(gcd(36 , 24)).toBe(12)
    } catch (e){
        customizeError(e, 'Check the examples that are given in task.js', true)
        throw e
    }
});

test('Check 40 70', () => {
    try {
        expect(gcd(40 , 70)).toBe(10)
    } catch (e){
        customizeError(e, 'Wrong answer for gcd(40, 70)', true)
        throw e
    }
});

test('Check 5 5', () => {
    try {
        expect(gcd(5 , 5)).toBe(5)
    } catch (e){
        customizeError(e, 'Wrong answer for gcd(5, 5)', true)
        throw e
    }
});

test('Check 13 10061', () => {
    try {
        expect(gcd(13 , 10061)).toBe(1)
    } catch (e){
        customizeError(e, 'Wrong answer for gcd(13, 10061)', true)
        throw e
    }
});

test('Check 10061 13', () => {
    try {
        expect(gcd(10061, 13)).toBe(1)
    } catch (e){
        customizeError(e, 'Wrong answer for gcd(10061, 13)', true)
        throw e
    }
});
