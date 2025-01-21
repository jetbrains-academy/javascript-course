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
        expect(Point.coordinateSystem).toBe("cartesian");
        expect(Point3D.coordinateSystem).toBe("cartesian");
    } catch (e){
        customizeError(e, 'Make sure the example program output is correct.', true)
        throw e
    }
});
