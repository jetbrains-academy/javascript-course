const rewire = require('rewire');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
let book;

beforeAll(() => {
    try {
        book = require('../task.js');
        expect(book).toBeDefined();
        expect(typeof book).toBe('object');
    } catch (e) {
        customizeError(e, 'Check if you have defined the book object', true)
        throw e
    }

});

test('test if there is title property', () => {
    try {
        expect(book).toHaveProperty("title");
    } catch (e){
        customizeError(e, 'Check if you have defined the manufacturer property', true)
        throw e
    }
});

test('test if there is author property', () => {
    try {
        expect(book).toHaveProperty("author");
    } catch (e){
        customizeError(e, 'Check if you have defined the model property', true)
        throw e
    }
});

test('test if there is year property', () => {
    try {
        expect(book).toHaveProperty("year");
    } catch (e){
        customizeError(e, 'Check if you have defined the year property', true)
        throw e
    }
});

test('test if there is summary property', () => {
    try {
        expect(book).toHaveProperty("summary");
    } catch (e){
        customizeError(e, 'Check if you have defined the summary property', true)
        throw e
    }
});

test('test summary getter', () => {
    try {
        let bookSummaryGetterResult = book.summary
        let expectedRegex = /by.*, published.*in/;
        expect(bookSummaryGetterResult).toMatch(expectedRegex);
    } catch (e){
        customizeError(e, 'Check if you have defined the summary property', true)
        throw e
    }
});
