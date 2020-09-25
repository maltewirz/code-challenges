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

// Big O of Hash Tables
// Insert: O(1)
// Deletion: O(1)
// Access: O(1)

// Hash first function: string only, not constant time, not random

export function hash(key: string, arrayLen: number): number {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        // map "a" to 1, "b" to 2, "c" to 3, etc
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

export function hashImproved(key: string, arrayLen: number): number {
    let total = 0;
    const WEIRD_PRIME = 31; // prime number to reduce collisions
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        // map "a" to 1, "b" to 2, "c" to 3, etc
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// The prime number in the hash is helpful in spreading out the keys more uniformly.
// It's also helpful if the array that you're putting values into has a prime length.

// Dealing with collisions
// Even with a large array and a great hash function, collisions are inevitable.
// Strategies for dealing with collisions: Seperate Chaining or Linear Probing.

// Seperate Chaining
// With seperate chaining, at each index in our array we store values using a more sophisticated
// data structure (e.g. an array or a linked list).

// Linear Probing
// With linear probing, when we find a collision, we search through the array to find the next empty slot.
// Unlike with separate chaining, this allows us to store a single key-value at each index.

export class HashTable {
    keyMap: any[] = [];
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key: string): number {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key: string, val: string): void {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, val]);
    }

    get(key: string): string | undefined {
        const index = this._hash(key);
        let result = undefined;
        if (this.keyMap[index]) {
            this.keyMap[index].forEach((element: string[]) => {
                if (element[0] === key) {
                    result = element[1];
                }
            });
        }
        return result;
    }

    // Values
    // Loops through the hash table aray and returns
    // and array of values in the table.

    values(): string[] {
        const valuesArr: string[] = [];
        this.keyMap.forEach((mainArray) => {
            mainArray.forEach((element: string[]) => {
                valuesArr.push(element[1]);
            });
        });
        return valuesArr;
    }

    // Keys
    // Loops through the hash tables aray and returns
    // an array of keys in the table.

    keys(): string[] {
        const keysArr: string[] = [];
        this.keyMap.forEach((mainArray) => {
            mainArray.forEach((element: string[]) => {
                keysArr.push(element[0]);
            });
        });
        return keysArr;
    }
}
