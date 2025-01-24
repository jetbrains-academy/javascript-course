const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    greeting = importByName(task, 'greeting');
});

test('Check given examples', () => {
    try {
        let bob = {
            name: "Bob",
            surname: "Thomson",
            age: 21,
        };

        let cat = {
            name: "Tom",
            breed: "Persian",
            age: 3,
        };
        expect(greeting(bob)).toBe("Hello, Bob Thomson!");
        expect(greeting(cat)).toBe("Hello, stranger!");
        expect(greeting({ })).toBe("Hello, stranger!");

    } catch (e){
        customizeError(e, 'Make sure the example program output is correct.', true)
        throw e
    }
});

test('Check extra example', () => {
    try {
        let nameless = {
            age: 21,
            surname: "Surname",
        }
        expect(greeting(nameless)).toBe("Hello, stranger!");
    } catch (e){
        customizeError(e, 'Stranger can have a surname but no name.', true)
        throw e
    }
});
