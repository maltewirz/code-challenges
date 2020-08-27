// Divide and Conquer:
// This pattern involves dividing a data set into smaller 
// chunks and then repeating a process with a subset of data. 
// This pattern can tremendously decrease time complexity.
// Binary search.

// Given a sorted array of integers, write a function called search
// that accepts a value and return the index where the value passed to the
// function is location. If the value is not found, return -1

export function search(arr: number[], val: number): number {
    let min = 0;
    let max = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        const middleIndex = Math.floor((min + max) / 2);
        const currentElement = arr[middleIndex];
        
        // currentElement from arr is bigger that searchValue
        if (currentElement > val) {
            // the maximum for creating the middleIndex is set lower
            max = middleIndex - 1;
        // currentElement from arr is smaller that searchValue
        } else if (currentElement < val) {
            // the minimum for creating the middleIndex is set higher
            min = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }
    return -1;
}

