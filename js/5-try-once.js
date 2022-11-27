'use strict';

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  blacklistedEmails = [];

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Change code above this line
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true

/*
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = Admin.AccessLevel;
  }

  // Change code above this line
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

console.log(Admin.AccessLevel.SUPERUSER);
console.log(Admin.AccessLevel.BASIC);
*/

/*
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    // Call the constructor of the parent User class
    super(email);
    this.posts = posts;
  }
}

const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
*/

/*
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line

class Admin extends User {
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
}

Admin.AccessLevel.BASIC; // returns the string "basic"
Admin.AccessLevel.SUPERUSER; // returns the string "superuser"

console.log(Admin.AccessLevel.BASIC); // returns the string "basic"
console.log(Admin.AccessLevel.SUPERUSER); // returns the string "superuser"
*/

/*
class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return 'Error! Price exceeds the maximum';
    }
    return 'Success! Price is within acceptable limits';
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

Car.checkPrice(36000); // returns the string "Success! Price is within acceptable limits"

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

Car.checkPrice(36000); // returns the string "Success! Price is within acceptable limits"
Car.checkPrice(18000); // returns the string "Success! Price is within acceptable limits"
Car.checkPrice(64000); // returns the string "Error! Price exceeds the maximum"
Car.checkPrice(57000); // returns the string "Error! Price exceeds the maximum"

console.log(Car.checkPrice(36000)); // returns the string "Success! Price is within acceptable limits"
console.log(Car.checkPrice(18000)); // returns the string "Success! Price is within acceptable limits"
console.log(Car.checkPrice(64000)); // returns the string "Error! Price exceeds the maximum"
console.log(Car.checkPrice(57000)); // returns the string "Error! Price exceeds the maximum"
*/

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
    if (newPrice < this.constructor.MAX_PRICE) {
      // (newPrice < this.constructor.MAX_PRICE) OR (newPrice < Car.MAX_PRICE)
      this.#price = newPrice;
    }
  }
  // Change code above this line
}

console.log(`Car max price: ${Car.MAX_PRICE}`);

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
*/

/*
class User {
  // Declaration and initialization of a static property
  static Roles = {
    ADMIN: 'admin',
    EDITOR: 'editor',
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
  email: 'mango@mail.com',
  role: User.Roles.ADMIN,
});

console.log(mango.Roles); // undefined
console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango.role); // "admin"
mango.role = User.Roles.EDITOR;
console.log(mango.role); // "editor"
*/

/*
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
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
*/

/*
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
// console.log(audi.#brand); // There will be an error, this is a private property
*/

/*
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
  padBoth(both) {
    this.value = `${both}${this.value}${both}`;
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
    // return (this.value += both);
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
*/
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
  // Change code above this line
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage); // items:(3) ['Nanitoids', 'Antigravitator', 'Droid']

console.log(storage.getItems()); // (3) [('Nanitoids', 'Prolonger', 'Antigravitator')];

console.log(storage.addItem('Droid'));
console.log(storage.getItems()); // (4) ['Nanitoids', 'Prolonger', 'Antigravitator', 'Droid']

console.log(storage.removeItem('Prolonger'));
console.log(storage.getItems()); // (3) ['Nanitoids', 'Antigravitator', 'Droid']
*/

/*
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
*/

/*
class Car {
  // Object destructuring
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 }); // the object will be { brand: "Audi", model: "Q3", price: 36000 }
console.log(audi); // { brand: "Audi", model: "Q3", price: 36000 }

const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 }); // the object will be { brand: "BMW", model: "X5", price: 58900 }
console.log(bmw); // { brand: "BMW", model: "X5", price: 58900 }

const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }); // the object will be { brand: "Nissan", model: "Murano", price: 31700 }
console.log(nissan); // { brand: "Nissan", model: "Murano", price: 31700 }
*/

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
*/

/*
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
*/

/*
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
*/
