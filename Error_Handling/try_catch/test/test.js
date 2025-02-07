const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    flightBoardPresenter = importByName(task, 'flightBoardPresenter');
    Flight = importByName(task, 'Flight');
});

test('Check given examples', () => {
    try {
        let flights1 = [
            new Flight("AMS", "LTN"),
            new Flight("AMS", "CDG"),
            new Flight("MUC", "AMS"),
            new Flight("LCA", "AMS"),
        ];
        const expected1 = "AMS - LTN\nAMS - CDG\nMUC - AMS\nLCA - AMS\n"

        let flights2 = [
            new Flight("AMS", "LTN"),
            "Flight from AMS to LTN",
            new Flight("MUC", "AMS"),
            new Flight("LCA", "AMS"),
            1234567890,
        ];
        const expected2 = "AMS - LTN\n--- - ---\nMUC - AMS\nLCA - AMS\n--- - ---\n"
        expect(flightBoardPresenter(flights1)).toBe(expected1);
        expect(flightBoardPresenter(flights2)).toBe(expected2);

    } catch (e){
        customizeError(e, 'Make sure the example program output is correct.', true)
        throw e
    }
});

test('Check extra example', () => {
    try {
        let flights3 = [
            null,
            new Flight("EVN", "AMS"),
            undefined,
        ];
        const expected3 = "--- - ---\nEVN - AMS\n--- - ---\n"
        expect(flightBoardPresenter(flights3)).toBe(expected3);
    } catch (e){
        customizeError(e, 'A stranger can have a surname but no first name.', true)
        throw e
    }
});
