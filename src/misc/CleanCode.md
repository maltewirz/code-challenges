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
* Test