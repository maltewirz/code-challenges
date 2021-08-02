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
    // console.log(rowRules, rowRules[0].add(5), rowRules, rowRules[0].has(5))
    // iterate through each cell on the board
    for (let row = 0; row < sudokoLength; row++) {
        for (let col = 0; col < sudokoLength; col++) {
            const curr = board[row][col];

            // get index of the 3x3 square. We multiply by three
            // (either col or row works) to adjust for dimension.
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

export function isValidSudoku2(board: string[][]): boolean {
    const rows = new Array(9).fill(undefined).map((x) => new Set(x));
    const cols = new Array(9).fill(undefined).map((x) => new Set(x));
    const grid = new Array(9).fill(undefined).map((x) => new Set(x));
    for (let row = 0; row < rows.length; row++) {
        for (let col = 0; col < cols.length; col++) {
            const curr = board[row][col];

            const gridIdx = Math.floor(row / 3) + Math.floor(col / 3) * 3;

            if (curr === '.') {
                continue;
            }

            const rowCheck = rows[row].has(curr);
            const colCheck = cols[col].has(curr);
            const mixedIdxCheck = grid[gridIdx].has(curr);

            if (rowCheck || colCheck || mixedIdxCheck) {                
                return false;
            }

            rows[row].add(curr);
            cols[col].add(curr);
            grid[gridIdx].add(curr);

        }
    }

    return true;
}

/**
 * 1. fill sets for col, row, mixedIdx
 * 2. loop over row and col
 * 3. for each entry, check if already in set, if yes return false, of no add
 * 4. return true
 */
