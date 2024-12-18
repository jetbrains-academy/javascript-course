const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    Point = importByName(task, 'Point');
});

test('Check given examples', () => {
    try {
        let testP1 = new Point(3, 4);
        let testP2 = new Point(42, 56);
        expect(testP1.distanceFromOrigin()).toBe(5);
        expect(testP2.distanceFromOrigin()).toBe(70);
    } catch (e){
        customizeError(e, 'Make sure the example program output is correct.', true)
        throw e
    }
});

test('Check extra example', () => {
    try {
        let testP1 = new Point(24, -7);
        expect(testP1.distanceFromOrigin()).toBe(25);
    } catch (e){
        customizeError(e, 'Check your solution for negative coordinates like (24, -7).', true)
        throw e
    }
});
