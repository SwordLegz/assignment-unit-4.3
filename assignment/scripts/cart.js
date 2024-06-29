console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Created global variable for `basket` as empty array //

let basket = [];
    console.log('Here is my basket:');

// `addItem` function takes in an item, adds to the array //
// `addItem` function returns true //

function addItem(itemsInBasket) {
    console.log('added', itemsInBasket, 'to basket');
    basket.push(itemsInBasket);
    return true;
}
addItem('avocado');
addItem('eggs');
addItem('banana');
addItem('bread');
console.log(basket);













// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
