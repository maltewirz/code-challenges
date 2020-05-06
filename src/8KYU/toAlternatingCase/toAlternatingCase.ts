export const toAlternatingCase = (s: string): string => {
    return s.split('').map(letter => {
        if (letter === letter.toUpperCase()) {
            return letter.toLowerCase();
        } else {
            return letter.toUpperCase();
        }
    }).join('')
}