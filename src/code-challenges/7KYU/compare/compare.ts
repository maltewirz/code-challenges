// https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/typescript

export function compare(s1: string|null, s2: string|null):boolean {
    const num1 = typeof s1 === 'string' && !s1.match('[^a-zA-z]') ? s1.toUpperCase().split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0) : 0;
    const num2 = typeof s2 === 'string' && !s2.match('[^a-zA-z]') ? s2.toUpperCase().split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0) : 0;
    return num1 === num2;
}