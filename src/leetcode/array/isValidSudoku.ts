// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated
// according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

export function isValidSudoku(board: string[][]): boolean {
    // create an empty set for reach row/col/square
    const rowRules = new Array(9).fill(undefined).map(() => new Set());
    const colRules = new Array(9).fill(undefined).map(() => new Set());
    const mixedRules = new Array(9).fill(undefined).map(() => new Set());
    const sudokoLength = 9;

    // iterate through each cell on the board
    for (let row = 0; row < sudokoLength; row++) {
        for (let col = 0; col < sudokoLength; col++) {
            const curr = board[row][col];

            // get index of the 3x3 square
            const mixedIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            if (curr === '.') continue;

            // if the current number already exists in set, invalid
            const a = rowRules[row].has(curr);
            const b = colRules[col].has(curr);
            const c = mixedRules[mixedIdx].has(curr);
            if (a || b || c) return false;

            // add number to set
            rowRules[row].add(curr);
            colRules[col].add(curr);
            mixedRules[mixedIdx].add(curr);
        }
    }
    return true;
}

// rule 1: for each row array entry: loop over row - OK
// rule 2: for each row.length: loop over column[row.length]
// rule 3: for row 1:

// interface KeyValue { [key: string]: number }
// let rowStore: KeyValue = {};
// for (let i = 0; i < board[0].length - 7; i++) {
//     console.log('full row', board[i]);
//     const row = board[i];
//     for (let j = 0; j < row.length; j++) {
//         if (row[j] === '.') {
//             continue
//         }
//         console.log('row contents', row[j], rowStore);
//         rowStore[row[j]] = (rowStore[row[j]] | 0) + 1
//         console.log('store', rowStore, 'item', row[j]);
//         if (rowStore[row[j]] > 1) {
//             return false
//         }
//     }
//     rowStore = {}
// }
