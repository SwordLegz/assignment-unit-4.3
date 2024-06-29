console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable for `basket` as an empty array //

let basket = [];
    console.log('Here is my basket:');

// Creat a function called `addItem` that takes in an item, and adds it to the array //
// Create a function called `addItem` that returns true //

function addItem(itemsInBasket) {
    console.log('added', itemsInBasket, 'to basket');
    basket.push(itemsInBasket);
    return true;
}
addItem('avocado');
    console.log(basket);
addItem('eggs');
    console.log(basket);
addItem('banana');
    console.log(basket);
addItem('bread');
    console.log(basket);


// Create function called `listItems` that loops over the `basket` array and logs each item //

function listItems(basketWithItems){
    for (eachItemInBasket of basketWithItems) {
        console.log(eachItemInBasket)
    }
}
    listItems(basket);

// Create a function called `empty` that empties the `basket` array //

function empty(itemsInBasket) {
    console.log('removed', itemsInBasket, 'in basket');
    basket.splice(itemsInBasket);
    return basket;
}
    empty(basket)
    console.log(`In my basket:`, basket);

// STRETCH: Add a global const named `maxItems` and set it to 5 //

const maxItems = 5;

// Create a function called `isFull` that correctly returns boolean `false` //

function isFull()

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
