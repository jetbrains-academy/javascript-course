const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    addToOrder = importByName(task, 'addToOrder');
});

test('Check addToOrder', () => {
    try {
        let testOrders = []
        let testOrder= {
            recipient: "Bob",
            tShirt: {
                size: "XL",
                color: "Blue"
            }
        }
        addToOrder(testOrders, testOrder);
        testOrder.recipient = "Alice";
        testOrder.tShirt.size = "S";
        addToOrder(testOrders, testOrder);

        let expectedAnswer = [
            { recipient: 'Bob', tShirt: { size: 'XL', color: 'Blue' } },
            { recipient: 'Alice', tShirt: { size: 'S', color: 'Blue' } }
        ]
        expect(testOrders).toEqual(expectedAnswer)
    } catch (e){
        customizeError(e, 'Use deep copy to solve the task.', true)
        throw e
    }
});
