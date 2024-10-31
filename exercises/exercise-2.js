/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

function grabCategories(obj) {
  return Object.keys(obj);
}

//function and pass in the 'papaJohns' object
const categories = grabCategories(papaJohns);
console.log(categories);


//return the names of 'pizzaToppings' in one array
const toppings = grabCategories(papaJohns.pizzaToppings);
console.log(toppings);


//accepts an object and target number of values
function verifyValues(obj, targetValueCount) {
  return Object.values(obj).length === targetValueCount;
}

const isCorrectCount = verifyValues(papaJohns, 9); // Should return true
console.log(isCorrectCount);

//intake any object representing a pizza place
function getToppingsInfo(pizzaPlace) {
  const toppings = pizzaPlace.pizzaToppings;
  return Object.entries(toppings).map(([topping, price]) => [topping, price]);
}

const toppingsInfo = getToppingsInfo(papaJohns);
console.log(toppingsInfo);


//print ad
papaJohns.printAd = function(topping, newAddress, newSlogan) {
  if (this.pizzaToppings[topping]) {
    return `Welcome to Papa Johns! We are located at 555 Main Street. This week, we are having a sale on ${topping} for just $${this.pizzaToppings[topping]}.  Better Ingredients. Better Pizza. Papa John's.`;
  } else {
    return `Sorry, we don't have ${topping} available.`;
  }
};

const adMessage = papaJohns.printAd('bacon');
console.log(adMessage);
