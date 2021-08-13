// https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/670/

// Given an integer array nums, design an algorithm to randomly shuffle the array.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

// Example 1:

// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must be
// equally likely to be returned. Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

export class ShuffleArray {
    public nums: number[];

    constructor(nums: number[]) {
        this.nums = nums;
    }

    reset(): number[] {
        return this.nums;
    }

    shuffle(): number[] {
        const nums = this.nums.slice();
        for (let i = 0; i < nums.length; i++) {
            const randIdx = Math.floor(Math.random() * nums.length);
            [nums[i], nums[randIdx]] = [nums[randIdx], nums[i]];
        }
        return nums;
    }
}

// Fisher-Yates algorithm:
// The Fisher-Yates algorithm is remarkably similar to the brute force solution. On
// each iteration of the algorithm, we generate a random integer between the current
// index and the last index of the array. Then, we swap the elements at the current
// index and the chosen index - this simulates drawing (and removing) the element from
// the hat, as the next range from which we select a random index will not include
// the most recently processed one. One small, yet important detail is that it is
// possible to swap an element with itself - otherwise, some array permutations
// would be more likely than others.
