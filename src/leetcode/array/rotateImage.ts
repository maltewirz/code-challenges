// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/
// You are given an n x n 2D matrix representing an image, rotate the image
// by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D
// matrix directly. DO NOT allocate another 2D matrix and do the rotation.

export function rotateImage(matrix: number[][]): number[][] {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (col === row) break;
            [matrix[row][col], matrix[col][row]] = [
                matrix[col][row],
                matrix[row][col],
            ];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].reverse();
    }
    return matrix;
}
