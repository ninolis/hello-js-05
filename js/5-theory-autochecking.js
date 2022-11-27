'use strict';

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 00/20  Status: Done

/*
** THEORY


** TASK


** Test


 */

// Javascript Editor:
// START
/*

*/

// Javascript Editor:
// FINISH
/*

console.log(
*/

// RESULT
/*

*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 1/20  Status: Done

/*
** THEORY
The reserved keyword this can be used inside functions. During the execution of a function, a reference to the object in the context of which it was called is written to this. Thus, in the body of the function, we can access the properties and methods of this object.

const bookShelf = {
  authors: ["Bernard Cornwell", "Robert Sheckley"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
bookShelf.addAuthor("Tanith Lee");
console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
The getAuthors and addAuthor methods are functions (object methods) that are called in the context of the bookShelf object. During their execution, a reference to the bookShelf object is written to this and we can refer to its properties and methods.

** TASK
Refactor the methods of the pizzaPalace object, placing the missing this in the places where the object's properties and methods are called.

** Test
The checkPizza method of the pizzaPalace object uses this.
The order method of the pizzaPalace object uses this
Calling pizzaPalace.order("Smoked") returns the string "Order accepted, preparing "Smoked" pizza"
Calling pizzaPalace.order("Four meats") returns the string "Order accepted, preparing "Four meats" pizza"
Calling pizzaPalace.order("Big Mike") returns the string "Sorry, there is no pizza named "Big Mike""
Calling pizzaPalace.order("Viennese") returns the string "Sorry, there is no pizza named "Viennese""

 */

// Javascript Editor:
// START
/*
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};


*/

// Javascript Editor:
// FINISH
/*
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};


console.log(
*/

// RESULT
/*
Done
Assignment 1/20
The method `order()` uses the `this` operator
The method `checkPizza()` uses the `this` operator
The call `pizzaPalace.order('Smoked')` returns the string 'Order accepted, preparing «Smoked» pizza'
The call `pizzaPalace.order('Four meats')` returns the string 'Order accepted, preparing «Four meats» pizza'
The call `pizzaPalace.order('Big Mike')` returns the string 'Sorry, there is no pizza named «Big Mike»'
The call `pizzaPalace.order('Viennese')` returns the string 'Sorry, there is no pizza named «Viennese»'
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 2/20  Status: Done

/*
** THEORY
TASK: USER ACCOUNT

** TASK
Before leaving, the developer broke the source code for managing user accounts of our food delivery service. Refactor the methods of the customer object by adding the missing this when accessing the object's properties.

After declaring the object, we added method calls in the order in which your code will check the tests. Please don't change anything there.

** Test
The variable customer is declared
The value of the customer variable is an object with properties and methods
Calling customer.getDiscount() returns the current value of the discount property
Calling customer.setDiscount(0.15) updates the value of the property discount
Calling customer.getBalance() returns the current value of the balance property.
Calling customer.getOrders() returns the current value of the orders property
Calling customer.addOrder(5000,"Steak") adds "Steak" to the array of values ​​of the orders property and updates the balance
The getBalance method of the customer object uses this
The getDiscount method of the customer object uses this
The setDiscount method of the customer object uses this
The getOrders method of the customer object uses this
The addOrder method of the customer object uses this

 */

// Javascript Editor:
// START
/*
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return balance;
  },
  getDiscount() {
    return discount;
  },
  setDiscount(value) {
    discount = value;
  },
  getOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost - cost * discount;
    orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


console.log(
*/

// RESULT
/*
Done

Assignment 2/20
The variable `customer` is declared
The value of the variable `customer` is an object with fields and methods
Calling `customer.getDiscount()` returns the current value of the `discount` field
Calling `customer.setDiscount(0.15)` updates the value of the `discount` field
Calling `customer.getBalance()` returns the current value of the `balance` field
Calling `customer.getOrders()` returns the current value of the `orders` field
Calling `customer.addOrder(5000, 'Steak')` adds `Steak` to the array of `orders` field values ​​and updates the balance
The `getBalance` method of the `customer` object uses the `this` operator
The `getDiscount` method of the `customer` object uses the `this` operator
The `setDiscount` method of the `customer` object uses the `this` operator
The `getOrders` method of the `customer` object uses the `this` operator
The `addOrder` method of the `customer` object uses the `this` operator

Result of code execution:
0.15
19750
[ 'Burger', 'Pizza', 'Salad', 'Steak' ]
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 3/20  Status: Done

/*
** THEORY
TASK: ORDER HISTORY

** TASK
The testers found bugs in the code of the food order history storage service. You need to fix them by correctly placing this in the methods of the historyService object for the methods to work correctly.

** Test
The variable historyService is declared
The value of the historyService variable is an object with initial properties and methods
Calling historyService.getOrdersLog() returns a string listing the data of all orders from the orders property
Calling historyService.getEmails() returns an array of all unique email addresses from the orders property
Calling historyService.getOrdersByEmail("solomon@topmail.net") returns [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
Calling historyService.getOrdersByEmail("artemis@coldmail.net") returns [{ email: "artemis@coldmail.net", dish: "Pizza" }]
The getOrdersLog method of the historyService object uses this
The getEmails method of the historyService object uses this
The getOrdersByEmail method of the historyService object uses this

 */

// Javascript Editor:
// START
/*
const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return orders.filter(order => order.email === email);
  },
  // Change code above this line
};

*/

// Javascript Editor:
// FINISH
/*
'use strict';

const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(' - ');
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
  // Change code above this line
};

historyService.getOrdersLog(); // returns a string listing the data of all orders from the orders property
historyService.getEmails(); // returns an array of all unique email addresses from the orders property
historyService.getOrdersByEmail('solomon@topmail.net'); // returns [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
historyService.getOrdersByEmail('artemis@coldmail.net'); // returns [{ email: "artemis@coldmail.net", dish: "Pizza" }]

console.log(historyService.getOrdersLog()); // returns a string listing the data of all orders from the orders property
console.log(historyService.getEmails()); // returns an array of all unique email addresses from the orders property
console.log(historyService.getOrdersByEmail('solomon@topmail.net')); // returns [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
console.log(historyService.getOrdersByEmail('artemis@coldmail.net')); // returns [{ email: "artemis@coldmail.net", dish: "Pizza" }]

console.log(
*/

// RESULT
/*
Done

Assignment 3/20
The variable `historyService` is declared
The value of the `historyService` variable is an object with initial properties and methods
Calling `historyService.getOrdersLog()` returns a string listing the data of all orders from the `orders` property
The call `historyService.getEmails()`returns an array of all unique email addresses from the `orders` property
The call `historyService.getOrdersByEmail('solomon@topmail.net')` returns `[{ email: 'solomon@topmail.net', dish: 'Burger' }, { email: 'solomon@topmail.net', dish: 'Apple pie' }]`
The call `historyService.getOrdersByEmail('artemis@coldmail.net')` returns `[{ email: 'artemis@coldmail.net', dish: 'Pizza'}]`
The `getOrdersLog` method of the `historyService` object uses `this`
The `getEmails` method of the `historyService` object uses `this`
The `getOrdersByEmail` method of the `historyService` object uses `this`
Result of code execution:
email: jacob@hotmail.com dish: Burrito - email: solomon@topmail.net dish: Burger - email: artemis@coldmail.net dish: Pizza - email: solomon@topmail.net dish: Apple pie - email: jacob@hotmail.com dish: Taco
[ 'jacob@hotmail.com', 'solomon@topmail.net', 'artemis@coldmail.net' ]
[
  { email: 'solomon@topmail.net', dish: 'Burger' },
  { email: 'solomon@topmail.net', dish: 'Apple pie' }
]
[ { email: 'artemis@coldmail.net', dish: 'Pizza' } ]
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 4/20  Status: Done

/*
** THEORY
Objects can be chained so that a property not found in one object is automatically searched for in another. The glue is the special hidden property [[Prototype]], which is displayed in the browser console as __proto__.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: 'Mango', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true
The Object.create(obj) method creates and returns a new object, associating it with the obj object. The object referenced in __proto__ is called the prototype. In our example, the animal object is the prototype for the dog object. The isPrototypeOf() method checks if the animal object is the prototype for dog and returns true or false.

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Mango'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4
The call to dog.name works in an obvious way - it returns an own name property of the dog object. When accessing dog.legs, the interpreter looks for the property legs in the object dog, does not find it and continues to search in the object by reference from dog.__ proto__, that is, in this case, in the object animal - its prototype.

That is, a prototype is a backup storage of object properties and methods that is automatically used when searching for them. An object that acts as a prototype can also have its own prototype, that one can have its own, and so on.

The property is searched for until the first match. The interpreter searches for a property by name in the object, if it does not find it, then it refers to the __proto__ property, that is, it follows the link to the prototype object, and then to the prototype prototype. If the interpreter gets to the end of the chain and does not find a property with the same name, it will return undefined.

** TASK
Change the code so that the parent object becomes the prototype for the object in the сhild variable.

** Test
The variable parent is declared
The value of the variable parent is an object
Calling parent.hasOwnProperty("surname") returns true
Calling parent.hasOwnProperty("heritage") returns true
The variable child is declared
The value of the variable child is an object
Calling child.hasOwnProperty("name") returns true
Calling child.name returns"Jason"
Calling child.hasOwnProperty("age") returns true
Calling child.age returns 27
Calling child.hasOwnProperty("surname") returns false
Calling child.surname returns"Moore"
Calling child.hasOwnProperty("heritage") returns false
Calling child.heritage returns "Irish"
Calling parent.isPrototypeOf(child) returns true
The Object.create() method is used

 */

// Javascript Editor:
// START
/*
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);
// Change code above this line


child.name = "Jason";
child.age = 27;

*/

// Javascript Editor:
// FINISH
/*
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line
const child = Object.create(parent);
// Change code above this line

child.name = "Jason";
child.age = 27;

child.hasOwnProperty("name"); // returns true
child.name; // returns"Jason"
child.hasOwnProperty("age"); // returns true
child.age; // returns 27
child.hasOwnProperty("surname"); // returns false
child.surname; // returns "Moore"
child.hasOwnProperty("heritage"); // returns false
child.heritage; // returns "Irish"
parent.isPrototypeOf(child); // returns true

console.log(child.hasOwnProperty("name"));     // returns true
console.log(child.name);                       // returns"Jason"
console.log(child.hasOwnProperty("age"));      // returns true
console.log(child.age);                        // returns 27
console.log(child.hasOwnProperty("surname"));  // returns false
console.log(child.surname);                    // returns"Moore"
console.log(child.hasOwnProperty("heritage")); // returns false
console.log(child.heritage);                   // returns "Irish"
console.log(parent.isPrototypeOf(child));      // returns true

console.log(
*/

// RESULT
/*
Done

Assignment 4/20
The variable 'parent' is declared
The value of the variable `parent` is an object
Calling `parent.hasOwnProperty('surname')` returns `true`
Calling `parent.hasOwnProperty('heritage')` returns `true`
The variable 'child' is declared
The value of the variable `child` is an object
Calling `child.hasOwnProperty('name')` returns `true`
Calling `child.name` returns 'Jason'
Calling `child.hasOwnProperty('age')` returns `true`
Calling `child.age` returns 27
Calling `child.hasOwnProperty('surname')` returns `false`
Calling `child.surname` returns 'Moore'
Calling `child.hasOwnProperty('heritage')` returns `false`
Calling `child.heritage` returns 'Irish'
Calling `parent.isPrototypeOf(child)` returns `true`
The `Object.create()` method is used

Result of code execution:
true
Jason
true
27
false
Moore
false
Irish
true
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 5/20  Status: Done

/*
** THEORY
TASK: PROTOTYPE CHAIN

** TASK
Modify the code by building the prototype chain so that the ancestor object is the prototype for the parent, which in turn is the prototype for the child.

** Test
The variable ancestor is declared
The value of the ancestor variable is an object.
The variable parent is declared
The value of the variable parent is an object.
The variable child is declared
The value of the variable child is an object.
Calling ancestor.isPrototypeOf("parent") returns true
Calling parent.isPrototypeOf("child") returns true
Calling ancestor.hasOwnProperty("surname") returns true
Calling ancestor.surname returns "Dawson"
Calling parent.hasOwnProperty("surname") returns true
Calling parent.surname returns "Moore"
Calling child.hasOwnProperty("surname") returns false
Calling child.surname returns "Moore"
Calling ancestor.hasOwnProperty("heritage") returns true
Calling ancestor.heritage returns "Irish"
Calling parent.hasOwnProperty("heritage") returns false
Calling parent.heritage returns "Irish"
Calling child.hasOwnProperty("heritage") returns false
Calling child.heritage returns "Irish"
The Object.create() method is used

 */

// Javascript Editor:
// START
/*
const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = {};
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = {};
child.name = "Jason";
child.age = 27;

// Change code above this line

*/

// Javascript Editor:
// FINISH
/*
const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// Change code above this line

ancestor.isPrototypeOf(parent)       ; // returns true
parent.isPrototypeOf(child)          ; // returns true
ancestor.hasOwnProperty("surname")   ; // returns true
ancestor.surname                     ; // returns "Dawson"
parent.hasOwnProperty("surname")     ; // returns true
parent.surname                       ; // returns "Moore"
child.hasOwnProperty("surname")      ; // returns false
child.surname                        ; // returns "Moore"
ancestor.hasOwnProperty("heritage")  ; // returns true
ancestor.heritage                    ; // returns "Irish"
parent.hasOwnProperty("heritage")    ; // returns false
parent.heritage                      ; // returns "Irish"
child.hasOwnProperty("heritage")     ; // returns false
child.heritage                       ; // returns "Irish"

console.log(ancestor.isPrototypeOf(parent));        // returns true
console.log(parent.isPrototypeOf(child));           // returns true
console.log(ancestor.hasOwnProperty("surname"));    // returns true
console.log(ancestor.surname);                      // returns "Dawson"
console.log(parent.hasOwnProperty("surname"));      // returns true
console.log(parent.surname);                        // returns "Moore"
console.log(child.hasOwnProperty("surname"));       // returns false
console.log(child.surname);                         // returns "Moore"
console.log(ancestor.hasOwnProperty("heritage"));   // returns true
console.log(ancestor.heritage);                     // returns "Irish"
console.log(parent.hasOwnProperty("heritage"));     // returns false
console.log(parent.heritage);                       // returns "Irish"
console.log(child.hasOwnProperty("heritage"));      // returns false
console.log(child.heritage);                        // returns "Irish"

console.log(
*/

// RESULT
/*
Done

Assignment 5/20
The variable 'ancestor' is declared
The value of the `ancestor` variable is an object
The variable 'parent' is declared
The value of the variable `parent` is an object
The variable 'child' is declared
The value of the variable `child` is an object
Calling `ancestor.isPrototypeOf(parent)` returns `true`
Calling `parent.isPrototypeOf(child)` returns `true`
Calling `ancestor.hasOwnProperty('surname')` returns `true`
Calling `ancestor.surname` returns 'Dawson'
Calling `parent.hasOwnProperty('surname')` returns `true`
Calling `parent.surname` returns 'Moore'
Calling `child.hasOwnProperty('surname')` returns `false`
Calling `child.surname` returns 'Moore'
Calling `ancestor.hasOwnProperty('heritage')` returns `true`
Calling `ancestor.heritage` returns 'Irish'
Calling `parent.hasOwnProperty('heritage')` returns `false`
Calling `parent.heritage` returns 'Irish'
Calling `child.hasOwnProperty('heritage')` returns `false`
Calling `child.heritage` returns 'Irish'
The `Object.create() `method is used

Result of code execution:
true
true
true
Dawson
true
Moore
false
Moore
true
Irish
false
Irish
false
Irish
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 6/20  Status: Done

/*
** THEORY
Object literal syntax allows you to create a single object. But often you need to create many objects of the same type with the same set of properties, but different values ​​and methods for interacting with them. All this must be done dynamically during program execution. To do this, use classes - a special syntax for declaring a function for creating objects.

A class declaration begins with the keyword class, followed by the name of the class and curly braces - its body. Classes are usually named with a capital letter, and in the name itself we reflect the type of object being created (noun).

class User {
  // Class body
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}
The result of calling new User() is an object called class instance because it contains the data and behavior described by the class.

** TASK
Using the keyword class, declare the class Car with an empty body.

** Test
The class Car is declared
The result of calling new Car() is an empty object

 */

// Javascript Editor:
// START
/*

*/

// Javascript Editor:
// FINISH
/*
class Car {
  // Class body
}
const car = new Car();
console.log(car); // {}

console.log(
*/

// RESULT
/*
Done

Assignment 6/20
The `Car` class is declared
The result of calling `new Car()` is an empty object
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 7/20  Status: Done

/*
** THEORY
To initialize an instance, the class has a constructor method. If it is not declared, a default constructor is created - an empty function that does not modify the instance.

class User {
  // Syntax for declaring a class method
  constructor(name, email) {
    // Instance properties initialization
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
Calling a class with the new operator creates a new object and calls the constructor in the context of that object. That is, this inside the constructor will refer to the newly created object. This allows you to add properties to each object with the same name but different values.

The properties name and email are called public properties because they will be the own properties of the instance object and can be accessed via a dot.

** TASK
Add a constructor method to the Car class that takes three parameters:

brand - car brand.
model - car model.
price - car price.
The class Car must create an object with the properties of the same name brand, model and price, the values ​​of which should be the passed arguments when it is called with the operator new.

** Test
The Car class is declared
The Car class has a constructor method
As a result of calling new Car("Audi","Q3", 36000) the object will be { brand: "Audi", model: "Q3", price: 36000 }
As a result of calling new Car("BMW", "X5", 58900) the object will be { brand: "BMW", model: "X5", price: 58900 }
As a result of calling new Car("Nissan","Murano", 31700) the object will be { brand: "Nissan", model: "Murano", price: 31700 }

 */

// Javascript Editor:
// START
/*
class Car {
  // Change code below this line

  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
class Car {
  // Change code below this line
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

const audi = new Car("Audi","Q3", 36000); // the object will be { brand: "Audi", model: "Q3", price: 36000 }
const bmw = new Car("BMW", "X5", 58900); // the object will be { brand: "BMW", model: "X5", price: 58900 }
const nissan = new Car("Nissan","Murano", 31700); // the object will be { brand: "Nissan", model: "Murano", price: 31700 }

console.log(audi); // the object will be { brand: "Audi", model: "Q3", price: 36000 }
console.log(bmw); // the object will be { brand: "BMW", model: "X5", price: 58900 }
console.log(nissan); // the object will be { brand: "Nissan", model: "Murano", price: 31700 }

console.log(
*/

// RESULT
/*
Done

Assignment 7/20
The `Car` class is declared
The `Car` class has a `constructor` method
As a result of calling `new Car('Audi','Q3', 36000)` the object will be ` {brand: 'Audi', model: 'Q3', price: 36000 }`
As a result of calling `new Car( 'BMW', 'X5', 58900)` the object will be `{brand: 'BMW', model: 'X5', price: 58900 }`
As a result of calling `new Car( 'Nissan', 'Murano', 31700)` the object will be `{brand: 'Nissan', model: 'Murano', price: 31700 }`
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 8/20  Status: Done

/*
** THEORY
The class can accept a large amount of input data for the properties of the future object. If there are many parameters (more than 2), then the "Parameter object" pattern is usually used. The idea behind this pattern is to pass one object with logically named properties as a parameter. The property values ​​of such an object will replace the set of arguments.

class User {
  // Destructuring the object
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Mango", email: "mango@mail.com" }

const poly = new User({
  name: "Poly",
  email: "poly@mail.com",
});
console.log(poly); // { name: "Poly", email: "poly@mail.com" }

** TASK
Refactor the Car class so that it takes one parameter - an object with the properties brand, model and price. Destructurize the object in the signature of the constructor.

** Test
The class Car is declared
The Car class has a constructor method
As a result of calling new Car({ brand: "Audi", model: "Q3", price: 36000 }) the object will be { brand: "Audi", model: "Q3", price: 36000 }
As a result of calling new Car({ brand: "BMW", model: "X5", price: 58900 }) the object will be { brand: "BMW", model: "X5", price: 58900 }
As a result of calling new Car({ brand: "Nissan", model: "Murano", price: 31700 }) the object will be { brand: "Nissan", model: "Murano", price: 31700 }

 */

// Javascript Editor:
// START
/*
class Car {
  // Change code below this line
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
class Car {
  // Change code below this line
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

'use strict';

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
  getPrice() {
    return this.price;
  }
  changePrice(value) {
    this.price = value;
  }
  // Change code above this line
}

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 }); // the object will be { brand: "Audi", model: "Q3", price: 36000 }
console.log(audi); // { brand: "Audi", model: "Q3", price: 36000 }

const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 }); // the object will be { brand: "BMW", model: "X5", price: 58900 }
console.log(bmw); // { brand: "BMW", model: "X5", price: 58900 }

const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }); // the object will be { brand: "Nissan", model: "Murano", price: 31700 }
console.log(nissan); // { brand: "Nissan", model: "Murano", price: 31700 }

console.log(
*/

// RESULT
/*
Done

Assignment 8/20
The class `Car` is declared
The `Car` class has a `constructor` method
As a result of calling `new Car({ brand: 'Audi', model: 'Q3', price: 36000 })` the object will be `{ brand: 'Audi', model: 'Q3', price: 36000 }`
As a result of calling `new Car({ brand: 'BMW', model: 'X5', price: 58900 })` the object will be `{brand: 'BMW', model: 'X5', price: 58900 }`
As a result of calling `new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })` the object will be `{brand: 'Nissan', model: 'Murano', price: 31700 }`
Result of code execution:
Car { brand: 'Audi', model: 'Q3', price: 36000 }
Car { brand: 'BMW', model: 'X5', price: 58900 }
Car { brand: 'Nissan', model: 'Murano', price: 31700 }
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 9/20  Status: Done

/*
** THEORY
The class methods are used to work with the properties of the future instance. Methods are just functions, but with one difference, they are available to an instance of the class.

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // getEmail method
  getEmail() {
    return this.email;
  }

  // changeEmail method
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

** TASK
Add two methods to the Car class.

getPrice() - returns the value of the property price from the object that will call it.
changePrice(newPrice) - updates the value of the price property of the object that will call it on newPrice.

** Test
The getPrice method is declared in the Car class
The getPrice method returns the value of the price property of the class instance that calls it
The changePrice method is declared in the Car class
The changePrice method changes the value of the price property of the class instance that calls it

 */

// Javascript Editor:
// START
/*
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line

  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
  getPrice() {
    return this.price;
  }
  changePrice(value) {
    this.price = value;
  }
  // Change code above this line
}

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 }); // the object will be { brand: "Audi", model: "Q3", price: 36000 }
console.log(audi); // { brand: "Audi", model: "Q3", price: 36000 }

const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 }); // the object will be { brand: "BMW", model: "X5", price: 58900 }
console.log(bmw); // { brand: "BMW", model: "X5", price: 58900 }

const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }); // the object will be { brand: "Nissan", model: "Murano", price: 31700 }
console.log(nissan); // { brand: "Nissan", model: "Murano", price: 31700 }

Car.prototype.hasOwnProperty('getPrice'); // returns `true`
console.log(Car.prototype.hasOwnProperty('getPrice')); // returns `true`

Car.prototype.hasOwnProperty('changePrice'); // returns `true`
console.log(Car.prototype.hasOwnProperty('changePrice')); // returns `true`

audi.changePrice(35000);
audi.getPrice(); //` will return the number `35000`
console.log(audi.getPrice()); // returns `35000`


console.log(
*/

// RESULT
/*
Done

Assignment 9/20
The `Car` class is declared
The constructor of the class accepts an object with the properties `brand`, `model` and `price`
The call `Car.prototype.hasOwnProperty('getPrice')` returns `true`
The value of `Car.prototype.getPrice` is a function
The call `Car.prototype.hasOwnProperty('changePrice')` returns `true`
The value of `Car.prototype.changePrice` is a function
For an object created by calling `new Car({ brand: 'Audi', model: 'Q3', price: 36000 })`, calling the method `getPrice()` will return the number `36000`
For an object created by calling `new Car({ brand: 'Audi', model: 'Q3', price: 36000 })`, calling the method `changePrice(35000)` and then calling `getPrice()` will return the number `35000`

Result of code execution:
Car { brand: 'Audi', model: 'Q3', price: 36000 }
Car { brand: 'BMW', model: 'X5', price: 58900 }
Car { brand: 'Nissan', model: 'Murano', price: 31700 }
true
true
35000
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 10/20  Status: Done

/*
** THEORY
TASK: WAREHOUSE

** TASK
Write a class, Storage, which will create objects for managing the warehouse of goods. The class expects only one argument - the initial array of goods, which is written to the created object in the items property.

Declare the following class methods:

getItems() - returns an array of the current items in the items property of the object that calls this method.
addItem(newItem) - accepts a new product, newItem, and adds it to the array of products in the items property of the object that calls this method.
removeItem(itemToRemove) - takes the product itemToRemove and removes it from the array of products in the items property of the object that calls this method.
Below the comment, we've added instance initialization and method calls in the order in which your code will test your tests. Please don't change anything there.

** Test
The class Storage is declared
The getItems method is declared in the Storage class
The addItem method is declared in the Storage class,
The removeItem method is declared in the Storage class
The getItems method returns the value of the items property of the class instance that calls it
The addItem method modifies the items property of the class instance that calls it
The removeItem method modifies the items property of the class instance that calls it
As a result of the call to new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) the value of the variable storage is an object
The storage object has a property items
The first call storage.getItems() immediately after initializing the instance returns an array ["Nanitoids", "Prolonger", "Antigravitator"]
The second call, storage.getItems(), after calling storage.addItem("Droid"), returns the array ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
The third call storage.getItems(), after calling storage.removeItem("Prolonger"), returns the array ["Nanitoids", "Antigravitator", "Droid"]

 */

// Javascript Editor:
// START
/*



// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

*/

// Javascript Editor:
// FINISH
/*

class Storage {
  // Change code below this line
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
// ** OR better:
  // removeItem(itemToRemove) {
  //   this.items = this.items.filter((item) => item !== itemToRemove); // ** it's much better:
  // }
  // Change code above this line
}


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


OR
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage); // items:(3) ['Nanitoids', 'Antigravitator', 'Droid']

console.log(storage.getItems()); // (3) [('Nanitoids', 'Prolonger', 'Antigravitator')];

console.log(storage.addItem('Droid'));
console.log(storage.getItems()); // (4) ['Nanitoids', 'Prolonger', 'Antigravitator', 'Droid']

console.log(storage.removeItem('Prolonger'));
console.log(storage.getItems()); // (3) ['Nanitoids', 'Antigravitator', 'Droid']

console.log(
*/

// RESULT
/*
Done

Assignment 10/20
The `Storage` class is declared
The `getItems` method is declared in the `Storage` class
The `addItem` method is declared in the `Storage` class
The `removeItem` method is declared in the `Storage` class
The `getItems` method returns the value of the `items` property of the instance of the class that calls it
As a result of calling `new Storage(['Nanitoids', 'Prolonger', 'Antigravitator'])` the value of the variable `storage` is an object
The `storage` object has a property `items`
The first call `storage.getItems()`, immediately after initializing the instance returns the array `['Nanitoids', 'Prolonger', 'Antigravitator']`
The second call `storage.getItems()`, after calling `storage.addItem('Droid')` returns the array `['Nanitoids', 'Prolonger', 'Antigravitator', 'Droid']`
The third call `storage.getItems()`, after calling `storage.removeItem('Prolonger')` returns the array `['Nanitoids', 'Antigravitator', 'Droid']`
Result of code execution:
Storage { items: [ 'Nanitoids', 'Prolonger', 'Antigravitator' ] }
[ 'Nanitoids', 'Prolonger', 'Antigravitator' ]
undefined
[ 'Nanitoids', 'Prolonger', 'Antigravitator', 'Droid' ]
undefined
[ 'Nanitoids', 'Antigravitator', 'Droid' ]
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 11/20  Status: Done

/*
** THEORY
TASK: STRING CONSTRUCTOR

** TASK
Write a class StringBuilder that takes one parameter initialValue - an arbitrary string that is written to the object being created in the value property.

Declare the following class methods:

getValue() - returns the current value of the property value.
padEnd(str) - gets the str (string) parameter and appends it to the end of the value of the value property of the object that calls this method.
padStart(str) - gets the str (string) parameter and adds it to the beginning of the value of the value property of the object that calls this method.
padBoth(str) - gets the str (string) parameter and adds it to the beginning and end of the value property of the object that calls this method.
Below the comment, we've added instance initialization and method calls in the order in which your code will test your tests. Please don't change anything there.

** Test
The class StringBuilder is declared
The method getValue is declared in the StringBuilder class
The getValue method returns the value of the value property of the instance of the class that calls it
In the StringBuilder class, the padEnd method is declared
The padEnd method changes the value property of the instance of the class that calls it
In the StringBuilder class, the padStart method is declared
The padStart method changes the value property of the instance of the class that calls it
In the StringBuilder class, the padBoth method is declared
The padBoth method changes the value property of the instance of the class that calls it
As a result of calling new StringBuilder("."), the value of the builder variable is an object
The builder object has a value property
The first call builder.getValue(), immediately after initializing the instance returns the string .
The second call builder.getValue(), after the call to builder.padStart("^") returns the string ^.
The third call builder.getValue(), after the call to builder.padEnd("^") returns the string ^.^
The fourth call builder.getValue(), after the call to builder.padBoth("=") returns the string =^.^=

 */

// Javascript Editor:
// START
/*



// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
*/

// Javascript Editor:
// FINISH
/*
'use strict';

// from autochecking:
class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padStart(start) {
    this.value = start + this.value;
  }
  padEnd(end) {
    this.value += end;
  }
  // padBoth(both) {
  //   this.value = `${both}${this.value}${both}`;
  // }

  // OR this way:
padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }

}

// OR my code with return - autochecking don't exept this return
/*
class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padStart(start) {
    return (this.value = start + this.value);
  }
  padEnd(end) {
    return (this.value += end);
  }
  padBoth(both) {
    return (this.value = `${both}${this.value}${both}`);
  }
}
*/
/*
const builder = new StringBuilder('.');
console.log(builder); // "."
console.log(builder.getValue()); // "."
console.log(builder.padStart('^')); // "^."
console.log(builder.getValue()); // "^."

console.log(builder.padEnd('^')); // "^.^"
console.log(builder.getValue()); // "^.^"

console.log(builder.padBoth('=')); // "=^.^="
console.log(builder.getValue()); // "=^.^="




// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

console.log(
*/

// RESULT
/*
Done

Assignment 11/20
The class `StringBuilder` is declared
The `getValue` method is declared in the `StringBuilder` class
The `getValue` method returns the value of the `value` property of the instance of the class that calls it
In the `StringBuilder` class, the `padEnd` method is declared
The `padEnd` method changes the `value` property of the instance of the class that calls it
In the `StringBuilder` class, the `padStart` method is declared
The `padStart` method changes the `value` property of the instance of the class that calls it
In the `StringBuilder` class, the `padBoth` method is declared
The `padBoth` method modifies the `items` property of the instance of the class that calls it
As a result of calling `new StringBuilder('.')`, The value of the `builder` variable is an object
The `builder` object has a `value` property
The first call `builder.getValue()`, right after initializing the instance, returns the string `.`
The second call `builder.getValue()`, after calling `builder.padStart('^')` returns the string `^.`
The third call `builder.getValue()`, after calling `builder.padEnd('^'')` returns the string `^.^`
The fourth call `builder.getValue()`, after calling `builder.padBoth('=')` returns the string `=^.^=`
Result of code execution:
.
^.
^.^
=^.^=

*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 12/20  Status: Done

/*
** THEORY
Encapsulation is a concept that obscures how a class works. A class user should only have access to the public interface - a set of public properties and methods of the class. The rest of the methods and properties (not public) should not be accessible.

In classes, encapsulation is implemented by private properties, which can only be accessed within the class.

Suppose the user's mail should be inaccessible for direct modification from outside, that is, private. By adding the # symbol to the property name, we make it private. Declaring a private property before initialization in the constructor is required.

class User {
  // Optional declaration of public properties
  name;
  // Mandatory declaration of private properties
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // There will be an error, this is a private property
Class methods can also be private, that is, they are available only in the body of the class. To do this, precede their names with a # symbol.

** TASK
Refactor the Car class so that the brand property is private and add two methods for the public interface to read and modify this property.

getBrand() returns the value of the private property brand.
changeBrand(newBrand) changes the value of the private property brand to newBrand.

** Test
The class Car is declared
The property brand in class Car is declared private
The constructor of the class accepts an object with the properties brand, model and price
As a result of calling new Car({ brand: "Audi", model: "Q3", price: 36000 }) the object will be { model: "Q3", price: 36000 }
As a result of calling а new Car({ brand: "bmw", model: "X5", price: 58900 }) the object will be { model: "X5", price: 58900 }
As a result of calling new Car({ brand: "Nissan", model: "Murano", price: 31700 }) the object will be { model: "Murano", price: 31700 }
The instance has no public property brand
The getBrand() method returns the value of the private property brand.
The changeBrand("Honda") method changes the value of the private property brand to "Honda".

 */

// Javascript Editor:
// START
/*
class Car {
  // Change code below this line

  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*


'use strict';

class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
  // Change code above this line
}

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 }); // the object will be { brand: "Audi", model: "Q3", price: 36000 }
console.log(audi); // { brand: "Audi", model: "Q3", price: 36000 }

const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 }); // the object will be { brand: "BMW", model: "X5", price: 58900 }
console.log(bmw); // { brand: "BMW", model: "X5", price: 58900 }

const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }); // the object will be { brand: "Nissan", model: "Murano", price: 31700 }
console.log(nissan); // { brand: "Nissan", model: "Murano", price: 31700 }

audi.changeBrand('Honda');
console.log(audi.getBrand()); // Honda

console.log(
*/

// RESULT
/*
Done

Assignment 12/20
The class `Car` is declared
The property `brand` in class `Car` is declared private
The constructor of the class accepts an object with the properties `brand`, `model` and `price`
As a result of calling `new Car({ brand: 'Audi', model: 'Q3', price: 36000 })` the object will be `{ model: 'Q3', price: 36000 }`
As a result of calling `new Car({ brand: 'BMW', model: 'X5', price: 58900 })` the object will be `{ model: 'X5', price: 58900 }`
As a result of calling `new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })` the object will be `{ model: 'Murano', price: 31700 }`.
The instance has no public property `brand`
The `getBrand()` method returns the value of the private property `brand`
The `changeBrand('Honda')` method changes the value of the private property `brand` to 'Honda'

Result of code execution:
Car { model: 'Q3', price: 36000 }
Car { model: 'X5', price: 58900 }
Car { model: 'Murano', price: 31700 }
Honda
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 13/20  Status: Done

/*
** THEORY
TASK: WAREHOUSE 2.0

** TASK
Refactor the Storage class to make the items property private.

Below the comment, we've added instance initialization and method calls in the order in which your code will test your tests. Please don't change anything there.

** Test
The class Storage is declared
The storage object has no items property
The getItems method is declared in the Storage class
The addItem method is declared in the Storage class
The removeItem method is declared in the Storage class
The items property in the Storage class is declared private
The constructor of the class takes a property items
As a result of a call new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) the value of the storage variable is an object
The first call storage.getItems() immediately after initializing the instance returns the array ["Nanitoids", "Prolonger", "Antigravitator"]
The second call storage.getItems() after calling storage.addItem("Droid") returns the array ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
The third call storage.getItems() after calling storage.removeItem("Prolonger") returns the array ["Nanitoids", "Antigravitator", "Droid"]

 */

// Javascript Editor:
// START
/*
class Storage {
  // Change code below this line

  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.items = this.items.filter(item => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

*/

// Javascript Editor:
// FINISH
/*
'use strict';

class Storage {
  // Change code below this line
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // [ 'Nanitoids', 'Antigravitator', 'Droid' ]

console.log(
*/

// RESULT
/*
Done

Assignment 13/20
The class `Storage` is declared
The `storage` object has no `items` property
The `getItems` method is declared in the `Storage` class
The `addItem` method is declared in the `Storage` class
The `removeItem` method is declared in the `Storage` class
The `items` property in the `Storage` class is declared private
The constructor of the class takes a property `items`
As a result of the call `new Storage([ 'Nanitoids', 'Prolonger', 'Antigravitator' ])` the value of the `storage` variable is an object
The first call `storage.getItems()` immediately after initializing the instance returns the array `['Nanitoids', 'Prolonger', 'Antigravitator']`
The second call `storage.getItems()` after calling `storage.addItem('Droid')` returns the array `['Nanitoids', 'Prolonger', 'Antigravitator', 'Droid']`
The third call `storage.getItems()` after calling `storage.removeItem('Prolonger')` returns the array `['Nanitoids', 'Antigravitator', 'Droid']`

Result of code execution:
[ 'Nanitoids', 'Prolonger', 'Antigravitator' ]
[ 'Nanitoids', 'Prolonger', 'Antigravitator', 'Droid' ]
[ 'Nanitoids', 'Antigravitator', 'Droid' ]
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 14/20  Status: Done

/*
** THEORY
TASK: STRING CONSTRUCTOR 2.0

** TASK
Refactor the StringBuilder class to make the value property private.

Below the comment, we've added instance initialization and method calls in the order in which your code will test your tests. Please don't change anything there.

** Test
The class StringBuilder is declared
The value property in the StringBuilder class is declared private
In the StringBuilder class the getValue method is declared
In the StringBuilder class, the padEnd method is declared
In the StringBuilder class, the padStart method is declared
In the StringBuilder class, the padBoth method is declared
As a result of calling new StringBuilder('.') the value of the variable builder is an object
The builder object has no value property
The first call builder.getValue() immediately after initializing the instance returns the string .
The second call builder.getValue() after calling builder.padStart("^"), returns the string ^.
The third call builder.getValue() after calling builder.padEnd("^"), returns the string ^.^
The fourth call builder.getValue() after calling builder.padBoth("="), returns the string =^.^=

 */

// Javascript Editor:
// START
/*
class StringBuilder {
  // Change code below this line

  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

*/

// Javascript Editor:
// FINISH
/*
class StringBuilder {
  // Change code below this line
#value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

console.log(
*/

// RESULT
/*
Done

Assignment 14/20
The class `StringBuilder` is declared
The `value` property in the `StringBuilder` class is declared private
In the `StringBuilder` class the `getValue` method is declared
In the `StringBuilder` class, the `padEnd` method is declared
In the `StringBuilder` class, the `padStart` method is declared
In the `StringBuilder` class, the `padBoth` method is declared
As a result of calling `new StringBuilder('.')` the value of the variable `builder` is an object
The `builder` object has no `value` property
The first call `builder.getValue()` immediately after initializing the instance returns the string '.'
The second call `builder.getValue()` after calling `builder.padStart('^')` returns the string '^.'
The third call `builder.getValue()` after calling `builder.padEnd('^')` returns the string '^.^'
The fourth call `builder.getValue()` after calling `builder.padBoth('=')` returns the string '=^.^='

Result of code execution:
.
^.
^.^
=^.^=
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 15/20  Status: Done

/*
** THEORY
Getters and setters are a shorter syntax for declaring methods for interacting with properties. Getter and setter imitate a regular public property of a class, but allow other properties to be changed in a more convenient way. A getter is executed when trying to get a property value, and a setter is executed when trying to change it.

Getters and setters are good for simple read and change operations on properties, especially private ones like their public interface. They are not suitable for working with a property that stores an array or an object.

class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Getter email
  get email() {
    return this.#email;
  }

  // Setter email
  set email(newEmail) {
    this.#email = newEmail;
  }
}
We have declared an email getter and setter by prefixing the property name with the keywords get and set. Within these methods, we either return the value of the private property #email or change its value. Getter and Setter are a match and must be called the same.

const mango = new User({ name: "Mango", email: "mango@mail.com" });
console.log(mango.email); // mango@mail.com
mango.email = "mango@supermail.com";
console.log(mango.email); // mango@supermail.com
When accessing mango.email, the getter get email() {...} is called and its code is executed. When trying to write mango.email = "mango@supermail.com" setter set email(newEmail) {...} is called and the string "mango@supermail.com" will be the value of the newEmail parameter.

The plus is that these are methods, which means that when writing, you can execute additional code, for example, with some checks, in contrast to performing the same operation directly with a property.

set email(newEmail) {
  if(newEmail === "") {
    console.error("Error! Mail cannot be empty string!");
    return;
  }

  this.#email = newEmail;
}

** TASK
Refactor the Car class. Make the properties model and price private, just like #brand. Standardize the public interface of the class by replacing the already declared methods with getters and setters brand, model and price to interact with private properties.

** Test
The class Car is declared
In the class Car, the private property brand is declared
In the class Car, the private property model is declared
In the class Car, the private property price is declared
The constructor of the class accepts an object with the properties brand, model and price
The getter brand is declared in the class Car
The setter brand is declared in class Car
The getter model is declared in the Car class
The setter model is declared in class Car
The getter price is declared in the Car class
The setter price is declared in the Car class

 */

// Javascript Editor:
// START
/*
class Car {
  // Change code below this line
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  getModel() {
    return this.model;
  }

  updateModel(newModel) {
    this.model = newModel;
  }

  getPrice() {
    return this.price;
  }

  setPrice(newPrice) {
    this.price = newPrice;
  }
  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
class Car {
  // Change code below this line
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}


console.log(
*/

// RESULT
/*
Done

Assignment 15/20
The class `Car` is declared
In the class `Car`, the private property `brand` is declared
In the class `Car`, the private property `model` is declared
In the class `Car`, the private property `price` is declared
The constructor of the class accepts an object with the properties `brand`, `model` and `price`
The getter `brand` is declared in the class `Car
The setter `brand` is declared in class `Car`
The getter `model` is declared in the `Car` class
The setter `model` is declared in class `Car`
The getter `price` is declared in the `Car` class
The setter `price` is declared in the `Car` class
*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 16/20  Status: Done

/*
** THEORY
In addition to the public and private properties of the future instance, the class can declare its own properties that are available only to the class, but not to its instances - static properties (static). They are useful for storing information related to the class itself.

Let's add a private property role to the user class - its role that defines a set of rights, for example, administrator, editor, just a user, etc. We will store possible user roles as a static property Roles - an object with properties.

Static properties are declared in the body of the class. The keyword static is appended to the property name.

class User {
  // Declaration and initialization of a static property
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.Roles.ADMIN,
});

console.log(mango.Roles); // undefined
console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango.role); // "admin"
mango.role = User.Roles.EDITOR;
console.log(mango.role); // "editor"
Static properties can also be private, that is, they are available only within the class. To do this, the property name must begin with a #, just like private properties. Accessing a private static property outside the class body will throw an error.

** TASK
Add the check of the passed value of the newPrice parameter to the price setter. If it is greater than MAX_PRICE, the setter does nothing, and if it is less than or equal, it overwrites the price of the car.

** Test
The class Car is declared
The class Car has a static property MAX_PRICE
The value of the static property MAX_PRICE is the number 50000
The instance has no MAX_PRICE property
The price getter is declared in the Car class
The price setter is declared in the Car class
Calling the price setter on an instance of the class, with an argument value less than the value of MAX_PRICE, changes the property #price
Calling the price setter on an instance of the class, with an argument value greater than the value of MAX_PRICE, does not change the property #price

 */

// Javascript Editor:
// START
/*
class Car {
  // Change code below this line
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

*/

// Javascript Editor:
// FINISH
/*
class Car {
  // Change code below this line

  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
  if (newPrice < MAX_PRICE)
    {this.#price = newPrice;}
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000


console.log(
*/

// RESULT
/*

*/

///////////////////////////////////////////////
// JS V2 block-5 Autochecking  ASSIGNMENT 17/20  Status: Done

/*
** THEORY


** TASK


** Test


 */

// Javascript Editor:
// START
/*

*/

// Javascript Editor:
// FINISH
/*

console.log(
*/

// RESULT
/*

*/
