// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

//print in pairs
function printPizzaPlace(pizzaPlace) {
  for (const key in pizzaPlace) {
    if (typeof pizzaPlace[key] === 'object' && !Array.isArray(pizzaPlace[key])) {
      console.log(`${key}:`);
      for (const nestedKey in pizzaPlace[key]) {
        console.log(`  ${nestedKey}: ${pizzaPlace[key][nestedKey]}`);
      }
    } else {
      console.log(`${key}: ${pizzaPlace[key]}`);
    }
  }
}

//highest and lowest topping prices
function toppingsPriceRange(pizzaPlace) {
  const prices = Object.values(pizzaPlace.pizzaToppings);
  const highest = Math.max(...prices);
  const lowest = Math.min(...prices);
  return [lowest, highest];
}

//average number of star reviews
function calculateAverageRating(pizzaPlace) {
  const ratings = Object.values(pizzaPlace.starReviews);
  const total = ratings.reduce((acc, rating) => acc + rating, 0);
  return total / ratings.length;
}

printPizzaPlace(dominos);
console.log(toppingsPriceRange(dominos)); 
console.log(calculateAverageRating(dominos)); 