# Coding Practice

## A collection of code challenges and computer science topics

## Purpose

1. [Code Challenges](src/code-challenges/) from Codewars. <img src="https://www.codewars.com/users/maltewirz/badges/micro" alt="Codewars profile tag" />
2. [Algorithms](src/computer-science/algorithms/) for searching and sorting.
3. [Data Structures](src/computer-science/data-structures/) like Singly Linked List, Doubly Linked List, Heaps and Trees.
4. [Solving patterns](src/computer-science/solving-patterns/) like Divide and Conquer, Multiple Pointers and Frequency Counter.
5. [Clean Code](src/clean-code/) with examples and checklist.

## Built With

- All code is written using [Typescript](https://www.typescriptlang.org/) and [Python](https://www.python.org/).
- The Typescript tests are written with [Jest](https://jestjs.io/en/) for unit testing.

## Getting Started

### For Typescript Challenges

1. Install using `npm i` command in your terminal.

2. Run `npm run test-ts <filename>` for a specific test, or `npm run test-ts` to run all tests.

### For Python Challenges

1. Install using `pipenv install` command in your terminal.

2. Start a shell environment by running pipenv shell

3. Navigate into any directory and run files using the `python <filename>` command.

4. Alternative for automatically rerun tests: Install nodemon globally: `npm i -g nodemon` and then run `KYU=<kyu> FOLDER=<folder> KATA=<kata> npm run test-py`. The first three variables (e.g. `KYU=6KYU FOLDER=arrayDiff KATA=array_diff`) define which test to run.
