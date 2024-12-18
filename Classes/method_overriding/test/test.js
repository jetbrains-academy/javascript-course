const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    Point = importByName(task, 'Point');
    Point3D = importByName(task, 'Point3D');
});

test('Check given examples', () => {
    try {
        let testP1 = new Point3D(3, 4, 12);
        let testP2 = new Point3D(24, 24, 23);
        expect(testP1.distanceFromOrigin()).toBe(13);
        expect(testP2.distanceFromOrigin()).toBe(41);
    } catch (e){
        customizeError(e, 'Make sure the example program output is correct.', true)
        throw e
    }
});

test('Check Point', () => {
    try {
        let testP3 = new Point(3, 4);
        expect(testP3.distanceFromOrigin()).toBe(5);
    } catch (e){
        customizeError(e, 'Point class should still work as expected before.', true)
        throw e
    }
});
