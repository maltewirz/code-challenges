// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/601/

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly
// above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

export function generatePascalsTriangle(numRows: number): number[][] {
    const result = [];
    for (let i = 1; i <= numRows; i++) {
        const curr = [];
        if (i === 1) {
            result.push([1]);
        } else if (i === 2) {
            result.push([1, 1]);
        } else {
            curr.push(1);
            const lastResult: number[] = result[result.length - 1];
            for (let i = 0; i < lastResult.length - 1; i++) {
                const sum = lastResult[i] + lastResult[i + 1];
                curr.push(sum);
            }
            curr.push(1);
            result.push(curr);
        }
    }
    return result;
}

// Alternative:
export function generatePascalsTriangle2(numRows: number): number[][] {
    if (numRows) {
        const result = [[1]];

        for(let i = 1;i < numRows;i++) {
            result[i] = [];
            for(let j = 0; j < i + 1;j++) {
                result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
            }
        }
            
        return result;
    }else {
        return [];
    }
}
