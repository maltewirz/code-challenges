// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated
// according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.

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

            // get index of the 3x3 square. We multiply by three (either col or row works) to adjust for dimension.
            const mixedIdx = Math.floor(row / 3) + Math.floor(col / 3) * 3;

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
