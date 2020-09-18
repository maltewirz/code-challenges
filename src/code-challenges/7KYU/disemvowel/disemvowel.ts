export function disemvowel(str: string) {
    const vowel: string[] = ['a', 'e', 'i','o', 'u'];
    return str.split('').filter(char => {
        if (char === char.toUpperCase()) {
            return vowel.indexOf(char.toLowerCase()) === -1
        } else {
            return vowel.indexOf(char) === -1
        }
    }).join('');
}

// alternative
// return str.replace(/[aeiou]/gi, "");
