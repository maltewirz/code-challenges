// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/774/
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the
// latest version of your product fails the quality check. Since each version is developed based on the
// previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes
// all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a
// function to find the first bad version. You should minimize the number of calls to the API.

// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:

// Input: n = 1, bad = 1
// Output: 1

// Scenario #1: isBadVersion(mid) => false

//  1 2 3 4 5 6 7 8 9
//  G G G G G G B B B       G = Good, B = Bad
//  |       |       |
// left    mid    right

// Scenario #2: isBadVersion(mid) => true

//  1 2 3 4 5 6 7 8 9
//  G G G B B B B B B       G = Good, B = Bad
//  |       |       |
// left    mid    right

//  1 2 3 4 5
//  G G G B B 
//  l   m   r

//  1 2 3 4 5
//  G G G B B 
//        l r

//  1 2 3 4  5
//  G G G B  B 
//        lr      


// binary search
export function solution(isBadVersion: any) {
    return function (n: number): number {
        let left = 1;
        let right = n;
        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid; // look on left side of mid
            } else {
                left = mid + 1; // look on the right side of mid
            }
        }
        return left;
    };
}

// Complexity analysis
// Time complexity : O(log n). The search space is halved each time
// Space complexity : O(1)
