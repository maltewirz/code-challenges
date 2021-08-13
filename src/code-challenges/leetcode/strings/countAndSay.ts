// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is
// then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so
// that each group is a contiguous section all of the same character. Then for each group, say
// the number of characters, then say the character. To convert the saying into a digit string
// replace the counts with a number and concatenate every saying.

// Example
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

// Problem rephrased:
// it should give an integer which then reads out how many of each number there are in the
// order they're presented.

export function countAndSay(n: number): string {
    let curr = '1';

    for (let i = 1; i < n; i++) {
        let temp = '';

        let cursor = 0;
        let lastChar = curr[0];
        let count = 0;

        while (cursor < curr.length) {
            if (lastChar !== curr[cursor]) {
                temp += count + lastChar;
                lastChar = curr[cursor];
                count = 0;
            }
            cursor += 1;
            count += 1;
        }
        temp += count + lastChar;
        curr = temp;
    }
    return curr;
}

// Comment: Difficult to understand challenge. Poorly worded from LC.
