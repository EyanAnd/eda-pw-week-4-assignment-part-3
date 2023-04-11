console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//creating an empty array called basket
let basket = [];
//creating a function called addItem which adds an item into the basket array adn returns true
function addItem( item ) {
    basket.push(item);
    return true;
} // end addItem
 console.log('Test- basket should return true', addItem('eggs')); // test

 // create a funtion called listItems
 function listItems() {
    // create a for loop that loops through the basket array and 
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
        }
    } // end listItems
    console.log('Test - should run list of items', listItems()); // test 

// create a function called empty 
function empty ( basket ) {
    basket.length = 0;
    
}

console.log('basket array length has been emptied', empty());