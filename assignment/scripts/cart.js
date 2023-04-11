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
    // set it so that isFull will return true if the amount of items in the basket is greter than or equal to 5.
    return basket.length >= maxItems;
}
 console.log('Test - should return false', isFull()); // test

// create a function called removeItem that takes an item parameter
function removeItem( item ) {
    // created a new variable with the value of indexOf to find the first match in the array
  let match = basket.indexOf(item);
  // created a conditional statement that returns null if there is no match within the basekt array.
  if (match === -1) {
    return null;
  } 
  // used the splice method in order to return the matching value from the basket array.
  return basket.splice(match, 1)[0];
}
addItem('corn'); // test
addItem('egg'); // test
addItem('cheese'); // test
console.log(removeItem('corn'));
console.log(removeItem('rice'));