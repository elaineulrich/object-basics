## EXERCISE TWO:

### Object Methods

Now that we can write, store, and modify objects, let's look at methods. Methods are functions that are stored on objects. We can create our own methods on objects, but JavaScript provides us with built-in methods that are commonly used.

1. [ ] Look over the provided `restaurant` object. Identify its keys and verify which data type is stored for each value.

   This object does something different from our last restaurant object. It has a `pizzaToppings` key that stores an object with pizza topping keys and price values.

2. [ ] Write a function, `grabCategories`, that accepts an object and returns an array of all the keys it contains.

3. [ ] Call the function and pass in the `papaJohns` object. What do you expect the result to be?

   - [ ] When we pass in `papaJohns`, the array should contain the key `pizzaToppings`, but **NOT** contain the names of the pizza toppings themselves.

4. [ ] **Bonus**: If we want this function to return the names of all `pizzaToppings` in one array without changing the internal code, what argument would we need to pass it?

5. [ ] Write a function, `verifyValues`, that accepts an object and a target number of values. It returns a boolean representing if the number of values in the object is equal to the input value.

   _Note_: When we use `Object.values()`, what is returned? Are there any pre-existing properties that can help us check the number of values?

6. [ ] Run this function passing in the `papaJohns` object and a target number that will make the result `false`. Then, run the function with a target number that will yield a result of `true`.

7. [ ] Write a function, `getToppingsInfo`, that intakes any object representing a pizza place and returns an array of smaller arrays containing two elements each: the topping key and its price. You can assume all pizza place objects have a string key `"pizzaToppings"`.

8. [ ] Now, without changing the previous code, add a `printAd` method to our `papaJohns` object that will announce a sale. It will intake a topping and return the following string:

   `"Welcome to Papa John's! We are located at 555 Main Street. This week, we are having a sale on {topping} for ${topping price}. Better Ingredients. Better Pizza. Papa John's."`

   - [ ] Run this function and pass in pizza toppings. Make sure the ad changes and displays the correct price for each one. For example, an input of `'bacon'` should announce a sale of bacon for `$3`.

9. [ ] **Bonus**: Refactor this function so it can handle any changes in address or slogan.

   - [ ] Without adjusting the original `papaJohns` object, update the slogan and address to anything you choose.
   - [ ] Run your refactored method and ensure the new address and slogan are printed in the ad!
