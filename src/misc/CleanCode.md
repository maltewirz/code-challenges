# Clean Code

### Clean Code Definitions: 

* Easy to read and understand.
* Should reduce cognitive load
* Should be concise and "to the point"
* Should avoid unintuitive names, complex nesting and big code blocks.
* Should follow common best practices and patterns.
* Should be fun to write and to maintain.

Story writing: Code is like an essay, you are the author. Make it fun and easy to read and understand.

### Key pain points

* Names
  * Variables
  * Functions
  * Classes
* Structure & Comments
  * Code Formatting
  * Good and Bad Comments
* Functions
  * Length
  * Parameters
* Conditionals & Error Handling
  * Deep Nesting
  * Missing Error Handling
* Classes & Data Structures
  * Missing Distinction
  * Bloated Classes

### Solutions:

	* Rules and Concepts
	* Patterns & Principles
	* Test-Driven Development (TDD)

### Distinctions

* Clean Code: Readable + easy to understand.
* Patterns and Principles: Maintainable and extensible.
* Clean Architecture:  Where to write which code. Focus on project as a whole.

### How to write Clean Code

* After each Feature, do a refactor (adjust functions, rename variables).
* Refactoring today is work you save tomorrow.
* A codebase can only survive and stay maintable if its continuosly imporved and refactored
* Pro tip: Whenever you add something new, try to improve existing code along the way.



# Names

* Variables, Constants, Properties
  * Data containers: e.g. user input data, validation results, a list of products
  * Use nouns or short phrases with adjectives: `const userData = {}` or `const isValid` 
* Functions & Methods
  * Commands or calculated values: e.g. sends data to server, check if user input is valid
  * Use verbs or short phrases with adjectives: `sendData()` or `inputIsValid()`
* Classes
  * Use classes to create "things": e.g. a user, a product, a http request body
  * Use nouns or short phrases with nouns: `class User {}` or `class RequestBody {}`

### Name casing

* snake_case
  * `is_valid`
  * Python
  * Variables, functions, methods
* camelCase
  * `isValid`
  * Java, Javascript
  * Variables, functions, methods
* PascalCase
  * `AdminRole`
  * Python, Java, Javascript
  * Classes
* kebab-case
  * `<side-drawer>`
  * HTML
  * Custom HTML Elements

### Naming variables, constants & properties

* Value is an Object
  * Describe the value
  * `user`or  `database`
  * Provide more details without introducing redundancy
  * `authenticatedUser`
* Value is Number or String
  * Describe the value
  * `name` or `age`
  * Provide more details without introducing redundancy
  * `firstName` or `age`
* Value is a Boolean
  * Answer a true/false question
  * `isActive` or `loggedIn`
  * Provide more details without introducing redundancy
  * `isActiveUser` or `loggedIn`

#### Example Variable Names

* User object (name, email, age): `user, customer` (more specific, the better)
* User input validation: `userValidated` or `isCorrect`

### Naming Functions & Methods

* Function performs an operation
  * Describe the operation
  * `getUser()`
  * Provide more details without introducing redundancy
  * `getUserByEmail()`

* Function computes a Boolean
  * Answer a true/false question
  * `isValid()`
  * Provide more details without introducing redundancy
  * `emailIsValid()`

#### Example Function & Method names

* Save User Data to database: `saveUser()`
* Validate the user input: `validate()`

### Naming Classes

* Describe the object 
* `User`
* Provide more details without introducing redundancy
* `Customer`
* Avoid redundant sufixes - Classes typically instantiated
* `DatabaseManager` makes no sense

#### Example Class Names

* A User: `class User`
* A Database `class Database ` 

```py
// Bad Solution Example
class Point:
    def __init__(self, coordX, coordY):
        self.coordX = coordX
        self.coordY = coordY


class Rectangle:
    def __init__(self, starting_point, broad, high):
        self.starting_point = starting_point
        self.broad = broad
        self.high = high

    def area(self):
        return self.broad * self.high

    def end_points(self):
        top_right = self.starting_point.coordX + self.broad
        bottom_left = self.starting_point.coordY + self.high
        print('Starting Point (X)): ' + str(self.starting_point.coordX))
        print('Starting Point (Y)): ' + str(self.starting_point.coordY))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def build_stuff():
    main_point = Point(50, 100)
    rect = Rectangle(main_point, 90, 10)

    return rect


my_rect = build_stuff()

print(my_rect.area())
my_rect.end_points()
```

```py
// Solution Example
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, starting_point, width, height):
        self.starting_point = starting_point
        self.width = width
        self.height = height

    def getArea(self):
        return self.width * self.height

    def print_coordinates(self):
        top_right = self.starting_point.x + self.width
        bottom_left = self.starting_point.y + self.height
        print('Starting Point (X)): ' + str(self.starting_point.x))
        print('Starting Point (Y)): ' + str(self.starting_point.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def build_rectangle():
    starting_point = Point(50, 100)
    rectangle = Rectangle(starting_point, 90, 10)

    return rectangle


rectangle = build_rectangle()

print(rectangle.getArea())
rectangle.print_coordinates()
```

# Code structure, comments & formatting

### Comments

#### Bad comments:

* Avoid comments with redundant information
* Dividers / Block markers
* Misleading Comments
* Commented-Out Code

#### Good comments

* Legal Information
* Explanations which can't be replaced by good naming e.g. regex
* Warnings
* To-do note 

### Code Formatting

* Code formatting improves readability & transports meaning
  * Vertical formatting
    * Space between lines
    * Grouping of code
  * Horizontal formatting
    * Indentation
    * Space between code
    * Line width
* Formatting is important and greatly improves readability
* Formatting rules differ between languages
* Follow language-specific conventions and guideline

#### Vertical Formatting

* Code should be readable like an essay - top to bottom without too many "jumps".
  * Consider splitting files with multiple concepts (e.g., classes) into multiple files
  * Different concepts ("areas") should be separated by spacing.

#### Horizontal Formatting

* Lines of code should be readable without scrolling - avoid very long "sentences".
  * Use indentation - even if not required technically
  * Break long statements into multiple shorter ones
* 

```py
// Bad example
# *********
# Imports
# *********
from os import path, makedirs
from pathlib import Path

# *********
# Main
# *********
# A class which allows us to create DiskStorage instances


class DiskStorage:
    def __init__(self, directory_name):
        self.storage_directory = directory_name

    def get_directory_path(self):
        return Path(self.storage_directory)

    # This must be called before a file is inserted
    def create_directory(self):
        if (not path.exists(self.get_directory_path())):
            makedirs(self.storage_directory)

    # Warning: Directory must exist in advance
    def insert_file(self, file_name, content):
        file = open(self.get_directory_path() / file_name, 'w')
        file.write(content)
        file.close()
        # Todo: Add proper error handling


log_storage = DiskStorage('logs')

log_storage.insert_file('test.txt', 'Test')
```

```py
// Solution
from os import path, makedirs
from pathlib import Path

class DiskStorage:
    def __init__(self, directory_name):
        self.storage_directory = directory_name

    def get_directory_path(self):
        return Path(self.storage_directory)

    def create_directory(self):
        if (not path.exists(self.get_directory_path())):
            makedirs(self.storage_directory)

    def insert_file(self, file_name, content):
    	file_path = self.get_directory_path() / file_name
        file = open(file_path, 'w')
        file.write(content)
        file.close()+
        # Todo: Add proper error handli#ng


log_storage = DiskStorage('logs')

log_storage.create_directory()
log_storage.insert_file('test.txt', 'Test')
```



# Functions and Methods

## Functions

* Be concise - in every aspect
* Calling the function should be readable
  * The number and order of arguments matter
  * Minimize the number of parameters, max 3

```js
// Reducing number of arguments:
function saveUser(email, password) {
  const user = {
    id: Math.random().toString(),
    email: email,
    password: password,
  };

  db.insert('users', user);
}

saveUser('test@test.com', 'testers');

function saveUser(user) {
  db.insert('users', user);
}

saveUser(newUser);



class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.id = Math.random().toString();
  }

  save() {
    db.insert('users', this);
  }
}

const user = new User('test@test.com', 'testers');
user.save();


let isLoggedIn = false;

function toggleLoginStatus() {
  isLoggedIn = !isLoggedIn;
}

toggleLoginStatus();


// One argument functions
function log(message) {
  console.log(message);
}

log('Hi there!');


class Message {
  constructor(message) {
    this.message = message;
  }

  log() {
    console.log(this.message);
  }
}

const msg = new Message('Hi!');
msg.log();



function square(number) {
  return number * number;
}

const result = square(3);

function emailIsValid(email) {
  return email.includes('@');
}

const isValid = emailIsValid('max@test.com');

// Two arg functions

function login(email, password) {
  // Log a user in
  // ...
}

login('max@test.com', 'testpassword');


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(10, 13);
```

Dealing with too many arguments:

```js
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

const user = new User('Max', 31, 'max@test.com');

class User {
  constructor(userData) {
    this.name = userData.name;
    this.age = userData.age;
    this.email = userData.email;
  }
}

// The order of arguments does not matter here -> better
const user = new User({ name: 'Max', email: 'max@test.com', age: 31 });


function compare(a, b, comparator) {
  if (comparator === 'equal') {
    return a === b;
  } else if (comparator === 'not equal') {
    return a !== b;
  } else if (comparator === 'greater') {
    return a > b;
  } else if (comparator === 'smaller') {
    return a < b;
  }
}

const isSmaller = compare(3, 5, 'smaller');
const isEqual = compare(3, 5, 'equal');

function compare(comparisonData) {
  const { first, second, comparator } = comparisonData;
  if (comparator === 'equal') {
    return first === second;
  } else if (comparator === 'not equal') {
    return first !== second;
  } else if (comparator === 'greater') {
    return first > second;
  } else if (comparator === 'smaller') {
    return first < second;
  }
}

const isSmaller = compare({ first: 3, second: 5, comparator: 'smaller' });
const isSmaller = compare({ comparator: 'equal', first: 3, second: 5 });
```

Infinite number of arguments:

```js
function sumUp(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

const total = sumUp(10, 19, -3, 22, 5, 100);
// Input array not needed -> "..." converts input to array
// const total = sumUp([10, 19, -3, 22, 5, 100]);
```

Output parameters - to be avoided

```js
// not good but at least functions implies modification
function addId(user) {
  user.id = 'u1';
}

const user = { name: 'Max' };
addId(user);

console.log(user);

// better: object oriented approach
class User {
  constructor(name) {
    this.name = name;
  }

  addId() {
    this.id = 'u1';
  }
}

const customer = new User('Max');
customer.addId();
console.log(customer);
```

* Definition of the function should be easy and readable
  * The length of the function body matters -> Functions should be small. Rule of thumb:

    * Extract code that works on the same functionality. E.g. combine `user.setAge(); user.setName()` into ` user.update()`
    * Extract code that requires more interpretation that the surrounding code: E.g. `if (!email.includes('@')) ` becomes `if (!isValid())`

  * Functions should do exactly one thing.

    * Different Operations + Different Levels of Abstraction
      * High Level: Easy to read and no room for interpretation
      * Low Level: Interpretation must be added by the reader.
    * Functions should do one thing that's one level of abstraction below their name. ` function emailIsValid(email) => email.includes('@)`

  * Try not to mix levels of abstraction

    

```js
function createUser(email, password) {
  if (!userDataIsValid(email, password)) {
    showValidationErrorMessage();
    return;
  }

  const user = buildUser(email, password);

  saveUserToDatabase(user);
}

function userDataIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
  return email && email.includes('@');
}

function passwordIsValid(password) {
  return password && password.trim() !== '';
}

function showValidationErrorMessage() {
  console.log('Invalid input!');
}

function buildUser(email, password) {
  return {
    email: email,
    password: password,
  };
}

function saveUserToDatabase(user) {
  database.insert(user);
}
```

