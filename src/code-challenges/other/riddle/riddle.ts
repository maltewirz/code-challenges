/**
 * Write a function that, given a string "riddle", returns a copy
 * of the string with all the questions marks replaced by lowercase letters (a-z)
 * in such a way that the same letters do not occur to each other.
 * 
 */

export function riddle(riddle: string) {
    const riddleArr: string[] = riddle.split('');

    for (let i = 0; i < riddle.length; i++) {
        if (riddleArr[i] === '?') {
            const avoidLetter1 = riddleArr[i - 1];
            const avoidLetter2 = riddleArr[i + 1];
            riddleArr[i] = randomLetterWithout(avoidLetter1, avoidLetter2);
        }
    }

    function randomLetterWithout(char1: string, char2: string) {
        let alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
        alphabet = alphabet.filter((char) => char != char1 && char != char2);
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return riddleArr.join('');
}
