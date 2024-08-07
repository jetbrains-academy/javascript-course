const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')

beforeAll(() => {
    medalsFilter = import_variable(task, 'medalsFilter');
});

const medals = {
    usa: 113,
    china: 89,
    australia: 46,
    japan: 58,
    greatBritain: 64,
    canada: 24
};

test('Check given examples', () => {
    try {
        expect(medalsFilter(medals, 60).toString()).toStrictEqual([ 'usa', 'china', 'greatBritain' ].toString())
    } catch (e){
        customizeError(e, 'Check the examples that are given in task.js', true)
        throw e
    }
});

test('All matches', () => {
    try {
        expect(medalsFilter(medals, 23).toString()).toStrictEqual([ "usa", "china", "australia", "japan", "greatBritain", "canada"].toString())
    } catch (e){
        customizeError(e, 'Wrong answer for medalsFilter(medals, 23)', true)
        throw e
    }
});

test('No matches', () => {
    try {
        expect(medalsFilter(medals, 230)).toStrictEqual([])
    } catch (e){
        customizeError(e, 'Wrong answer for medalsFilter(medals, 230)', true)
        throw e
    }
});
