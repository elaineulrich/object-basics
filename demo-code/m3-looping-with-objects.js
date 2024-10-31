// Module 3: Looping With Objects

// Problem: Objects have keys that we set, not pre-determined indices like Arrays.
// Objects are not inherently iterable. They do not store key-values in a fixed sequence.
// We still have tools for iterating over objects, however.

const devslopesDiner = {
  name: "Devslopes Diner",
  cuisine: "American",
  address: "555 Main Street",
  avgPrice: 15,
  reviews: [{}, {}, {}],
  ratings: [9, 7, 10, 5],
  passedInspection: true,
};

// for...in
// Iterates over all enumerable properties of an object, including those that are inherited from its prototype chain (more on that later!).
// Uses the keys of an object to iterate. It's important to remember that this includes both the object's own properties and inherited ones.

for (const key in devslopesDiner) {
  console.log(key, devslopesDiner[key]);
}

// for...of
// Iterates over the values of an iterable object (e.g., Array, Set, Map, etc.).
// When used with Object.keys(), Object.values(), or Object.entries(), it allows iteration over an object's own properties.
// This choice works well for iterating over objects when you want to ensure you're only dealing with the object's own properties.

for (const key of Object.keys(devslopesDiner)) {
  console.log(key, devslopesDiner[key]);
}

// We can also use Object.values() or Object.entries() methods here if needed!
// Object.values() is useful when you only need the values, and Object.entries() is useful when you need both keys and values.
// This gives us more control and is the better choice when working with objects,
// especially if the object structure is complex or if you need to avoid inherited properties.
