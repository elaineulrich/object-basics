/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const faveResturaunt = {
  name: "Los Campesinos",
  cuisines: ["Mexican"],
  numberOfStars: "4",
  favorited: "true",
};

const myObject = {
  address: "Dallas, TX",
  zipcode: "79808",
  acceptsReservation: "no",
  numberOfStars: "5",
  favorited: "no",
  cuisines: ["Mexican", "American"], 
};

const retrieveProperty = "cuisines"; 

const retrieveValue = (property) => {
  if (faveResturaunt.hasOwnProperty(property)) {
    return faveResturaunt[property];
  } else if (myObject.hasOwnProperty(property)) {
    return myObject[property];
  } else {
    return `Property "${property}" not found in either object.`;
  }
};

console.log(retrieveValue(retrieveProperty));