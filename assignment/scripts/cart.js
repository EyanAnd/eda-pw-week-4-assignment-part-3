console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//creating an empty array called basket
let basket = [];
// create a global const called maxItems and set it equal to 5.
const maxItems = 5;

//creating a function called addItem which adds an item into the basket array adn returns true
function addItem( item ) {
    if (isFull()) {
        return false;
    }
    basket.push(item);
    return true;
    
} // end addItem
 console.log('Test- basket should return true', addItem('pizza')); // test



 // create a funtion called listItems
 function listItems() {
    // create a for loop that loops through the basket array and 
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
        }  
    } // end listItems
    console.log('Test - should run list of items', listItems()); // test 

// create a function called empty 
function empty () {
   return basket = [];   
}

console.log('Test - -should return true', addItem('corn')); //test
console.log('Test - should show a list of all the Items', listItems()); // test
console.log('Test - shouls empty the basket array', empty()); // test
console.log('Test - should call the basket array which should be empty', basket); // test

// create a function called isFull().
function isFull() {
    return basket.length >= maxItems;
}
 console.log('Test - should return false', isFull()); // test


