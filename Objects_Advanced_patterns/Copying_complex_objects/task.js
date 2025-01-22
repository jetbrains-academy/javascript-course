function addToOrder(orders, tShirt) {
    orders.push(structuredClone(tShirt));
}

let orders = [];

let currentOrder= {
    recipient: "Bob",
    tShirt: {
        size: "XL",
        color: "Blue"
    }
};

addToOrder(orders, currentOrder);

currentOrder.recipient = "Alice";
currentOrder.tShirt.size = "S";

addToOrder(orders, currentOrder);

console.log(orders);
// should print
// [
//     { recipient: 'Bob', tShirt: { size: 'XL', color: 'Blue' } },
//     { recipient: 'Alice', tShirt: { size: 'S', color: 'Blue' } }
// ]
