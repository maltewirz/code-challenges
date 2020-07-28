// https://www.codewars.com/kata/587731fda577b3d1b0001196/solutions/typescript

export function camelCase(str: string): string {
    let result = '';
    str.split(' ').forEach(word => {
        result += word.charAt(0).toUpperCase() + word.slice(1);
    })
    return result;
}

// alternative
// str.split(' ')
// .map(word => word ? word[0].toUpperCase() + word.slice(1) : '')
// .join('')