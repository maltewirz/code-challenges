// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

export function myAtoi(s: string): number {
    const trimmedS = s.trim();
    if (trimmedS === '') {
        return 0;
    }

    const parsedInt = Number.parseInt(trimmedS, 10);
    if (Number.isNaN(parsedInt)) {
        return 0;
    }

    const minRange = Math.pow(-2, 31);
    if (parsedInt < minRange) {
        return minRange;
    }
    const maxRange = Math.pow(2, 31) - 1;
    if (parsedInt > maxRange) {
        return maxRange;
    }
    return parsedInt;
}
