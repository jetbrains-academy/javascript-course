const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    greeting = importByName(task, 'greeting');
});

test('Check correct examples', () => {
    try {
        let bob = {
            name: "Bob",
            surname: "Thomson",
            age: 21,
        };
        expect(greeting(bob)).toBe("Hello, Bob Thomson!");
    } catch (e){
        customizeError(e, 'Make sure the example with bob is working.', true)
        throw e
    }
});

test('Check throwing exception', () => {
    try {
        let cat = {
            name: "Tom",
            breed: "Persian",
            age: 3,
        };
        try{
            greeting(cat);
        } catch (e){
            expect(e.message).toBe('A person must have a name and a surname');
        }
    } catch (e){
        customizeError(e, 'Make sure the example with the cat works and the error message is correct.', true)
        throw e
    }
});
