// Hash Table
// Used to store key-value pairs. Like arrays, but the keys are not ordered.
// Unlike arrays, hash tables are fast for all of the following operations: 
// Finding values, adding new values and removing values.

// Nearly every programming language has some sort of hash table data structure.
// Because of their speed, hash tables are very commonly used. 
// Python has Dictionaries
// JS has Objects and Maps - Objects have some restrictions. but are basically hash tables.
// Java, Go, Scala have Maps
// Ruby has Hashes.

// Hash Tables Example
// We want to store colors, we could use an array/ list:
// ["ffewofi", "wefowefpn", "oerewfn"]  -> Not super readable, what do these numbers correspond to?
// colors["cyan"] is better than colors[2]

// To implement a hash table, we'll be using an array.
// In order to look up values by key, we need a way to convert keys into valid array indices.
// A function that performs this task is called a hash function.

// Good Hash: 
// 1. Fast - constant time
// 2. Doesn't cluster outputs at specific indices, but distributes uniformly
// 3. Deterministic - Same input yields same output
