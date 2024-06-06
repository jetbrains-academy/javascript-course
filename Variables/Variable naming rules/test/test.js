const rewire = require('rewire');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
const task = rewire('../task');

test('Check CheckMe', () => {
    try {
        CheckMe = task.__get__('CheckMe');
    } catch (e) {
        let errorToShow = new Error('"CheckMe" variable has a possible JavaScript name. Don\'t remove it.');
        errorToShow.stack = null;
        throw errorToShow;
    }
});

test('Check $_$', () => {
    try {
        $_$ = task.__get__('$_$');
    } catch (e) {
        let errorToShow = new Error('"$_$" variable has a possible JavaScript name. But, of course, meaningless. Don\'t remove it.');
        errorToShow.stack = null;
        throw errorToShow;
    }
});

test('Check text_one', () => {
    try {
        text_one = task.__get__('text_one');
    } catch (e) {
        let errorToShow = new Error('"text_one" variable has a possible JavaScript name. Don\'t remove it.');
        errorToShow.stack = null;
        throw errorToShow;
    }
});

test('Check perfectName', () => {
    try {
        perfectName = task.__get__('perfectName');
    } catch (e) {
        let errorToShow = new Error('"perfectName" variable has a possible JavaScript name. Don\'t remove it.');
        errorToShow.stack = null;
        throw errorToShow;
    }
});
