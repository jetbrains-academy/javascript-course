const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    createBadge = importByName(task, 'createBadge');
});

test('Check object copying', () => {
    try {
        let testTemplate= {
            name: "<>",
            company: "JetBrains",
            event: "JavaScript Day",
            year: 2025,
            extraField: "extraValue"
        }
        let bob = createBadge(testTemplate, "Bob");
        let alice = createBadge(testTemplate, "Alice");
        let john = createBadge(testTemplate, "John");
        expect(bob.name).toEqual("Bob")
        expect(alice.name).toEqual("Alice")
        expect(john.name).toEqual("John")
    } catch (e){
        customizeError(e, 'createBadge() should create a copy of `template` object', true)
        throw e
    }
});

test('Check name setting', () => {
    try {
        let testTemplate= {
            name: "<>",
            company: "JetBrains",
            event: "JavaScript Day",
            year: 2025,
            extraField: "extraValue"
        }
        let badge = createBadge(testTemplate, "Bob")
        expectedAnswer = {
            name: "Bob",
            company: "JetBrains",
            event: "JavaScript Day",
            year: 2025,
            extraField: "extraValue"
        }
        expect(badge).toEqual(expectedAnswer)
    } catch (e){
        customizeError(e, 'createBadge() should update only the name attribute. Leave all other attributes from the template as they are', true)
        throw e
    }
});
