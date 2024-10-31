const rewire = require('rewire');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
import_variable = utils.__get__('import_variable')
task = rewire('../task.js');
let book;

beforeAll(() => {
    try {
        book = import_variable(task, 'book');
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
        customizeError(e, 'Check if you have defined the title property', true)
        throw e
    }
});

test('test if there is author property', () => {
    try {
        expect(book).toHaveProperty("author");
    } catch (e){
        customizeError(e, 'Check if you have defined the author property', true)
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
        let expectedRegex = /by.*, published.*in .*/;
        expect(bookSummaryGetterResult).toMatch(expectedRegex);
    } catch (e){
        customizeError(e, 'Check if you have defined the summary property', true)
        throw e
    }
});
