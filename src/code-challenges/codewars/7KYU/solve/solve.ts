export function solve(s: string) {
    let uppercaseCount = s.split('').filter(letter => letter === letter.toUpperCase()).length;
    return uppercaseCount > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}