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





