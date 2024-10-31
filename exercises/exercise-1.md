## EXERCISE ONE:

### Object Syntax & Notation

Now that you understand how to write objects and access their properties using dot and bracket notation, let's build an object that represents the address of your favorite restaurant! Imagine this object will be used in an application that allows us to make restaurant recommendations for our users.

1. [ ] Declare a `const` and label it the name of your favorite restaurant.

2. [ ] Assign the `const` a value of an object literal containing the following keys. Replace the data types with values of that data type specific to your favorite restaurant:

   - [ ] `name`: string
   - [ ] `cuisines`: array of strings
   - [ ] `numberOfStars`: number
   - [ ] `favorited`: boolean

3. [ ] Whoops. It looks like we forgot some key information that we will need before recommending this restaurant to our users. Add the following properties **without changing the object literal** you created. How can we add the following properties to an object after it has already been created?

   - [ ] `address`: string
   - [ ] `zipcode`: number
   - [ ] `acceptsReservations`: boolean

4. [ ] Amazing. Our object is almost ready for use in our application. However, the owner wants to update some of the information. Without changing your previous code, update the following object properties:

   - [ ] Add a star to the `numberOfStars`.
   - [ ] Change the `favorited` boolean to the opposite.
   - [ ] Add a new cuisine to the array of `cuisines`.

5. [ ] Now, let's make sure our code can handle a request for any object key. Write a function called `retrieveProperty` that intakes an object and string key. It should return the value associated with that key. If the input property does not exist on the object, return a string that says, `"The information you requested does not exist."`

6. [ ] Invoke this function passing in your restaurant object and the following keys:
   - [ ] `cuisines` (returns the array of cuisines)
   - [ ] `favorited` (returns the boolean)
   - [ ] `name` (returns the string name)
   - [ ] `nickName` (does not exist, should print string)
   - [ ] `state` (does not exist, should print string)
