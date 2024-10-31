/* 
Exercise Two: Object Methods
*/

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

const grabCategories = (object) => {
  return Object.keys(object);
};

// console.log(grabCategories(papaJohns));
// console.log(grabCategories(papaJohns.pizzaToppings));

const verifyValues = (object, target) => {
  return Object.values(object).length === target;
};

// console.log(verifyValues(papaJohns, 9));
// console.log(verifyValues(papaJohns, 8));

const getToppingsInfo = (object) => {
  return Object.entries(object.pizzaToppings);
};

// console.log(getToppingsInfo(papaJohns));

papaJohns.printAd = function (topping) {
  return `Welcome to ${papaJohns.name}. We are located at ${papaJohns.address}. This week we are having a sale on ${topping} for $${papaJohns.pizzaToppings[topping]}. ${papaJohns.slogan}`;
};

console.log(papaJohns.printAd("bacon"));

papaJohns.slogan = "I mean come on it's delicious.";
papaJohns.address = "123 Amazing Pizza Plaza";

console.log(papaJohns.printAd("bacon"));
