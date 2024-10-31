/* 
Exercise One: Object Syntax & Notation
*/

const canales = {
  name: "Canales",
  cuisines: ["italian", "american", "steak"],
  numberOfStars: 4,
  favorited: true,
};

// console.log(canales);

canales.address = "555 Main Street";
canales.zipcode = 11234;
canales.acceptsReservations = true;

// console.log(canales);

canales.numberOfStars += 1; 
canales.favorited = !canales.favorited; 
canales.cuisines.push("Small Plates");

function retrieveProperty(key, obj) {
  if (obj[key]) {
    return object[key];
  } else {
    return "The information you requested does not exist.";
  }
}; 




