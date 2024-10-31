// Module 1: What are Objects?

// Objects are data types in JS 
// They are composite data types: they can store other data types
// Objects store data in key : value pairs

// How do we write objects?

const tylerObject = {
  name: "Tyler",
  dob: 1992,
  hobbies: ["writing", "programming", "cooking"],
  education: {
    2024: "Devslopes",
  },
  lovesDogs: true,
};

// Why does this matter?
// Objects allow us to associate data into key:value pairs.
// Objects allow us to group alike data in the same place when that data does not fit neatly into a list or Array.
// This is really useful because it means we can use Objects to model real life like people, cars, or in this example, restaurants.

const canalesRest = {
  name: "Canales",
  cuisine: "Italian",
  address: "555 Main St.",
  avgPrice: 20,
  reviews: [{}, {}, {}],
  ratings: [9, 7, 10, 5],
  passedInspection: true,
};

// How do we access objects?

// dot-notation: we know the key we want to access
// console.log(canalesRest.avgPrice);

// bracket-notation: we need to evaluate something before getting the key
// const userSearch = "reviews";
// console.log(canalesRest[userSearch]);

// console.log(canalesRest.bestOfTown);

const canalesRest1 = {
  name: "Canales",
  cuisine: "Italian",
  address: "555 Main St.",
  avgPrice: 20,
  reviews: [{}, {}, {}],
  ratings: [9, 7, 10, 5],
  passedInspection: true,
};

console.log("Before isDowntown: ", canalesRest1);

// canalesRest1.faveDish = "Chicken Parm";
const newObjectProperty = "isDowntown";
canalesRest1[newObjectProperty] = false;

console.log("After isDowntown: ", canalesRest1);


