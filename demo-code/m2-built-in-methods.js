/*
  Module 2: Built-in Object Methods 
  [1] What are methods? 
  [2] Common Object Methods 
  [3] Adding our own methods to objects
  [4] Instance v. Static Methods
*/

const devslopesDiner = {
  name: "Devslopes Diner",
  cuisine: "American",
  address: "555 Main Street",
  avgPrice: 15,
  reviews: [{}, {}, {}],
  ratings: [9, 7, 10, 5],
  passedInspection: true,
};

// console.log("Object.keys: ", Object.keys(devslopesDiner));
// console.log("Object.values: ", Object.values(devslopesDiner));
// console.log("Object.entries: ", Object.entries(devslopesDiner));
// console.log(
//   "Has own property, cuisine: ",
//   devslopesDiner.hasOwnProperty("cuisine")
// );
// console.log(
//   "Has own property, founded: ",
//   devslopesDiner.hasOwnProperty("founded")
// );

// Creating our own methods!

devslopesDiner.printAd = function () {
  console.log(
    `Welcome to the ${devslopesDiner.name}! We serve ${devslopesDiner.cuisine} food 
    and are located at ${devslopesDiner.address}. Come visit us!`
  );
};

devslopesDiner.printAd();


// Static v Instance 

// Static Method
Object.keys(devslopesDiner); 

// Instance Methods
devslopesDiner.hasOwnProperty("founded");













