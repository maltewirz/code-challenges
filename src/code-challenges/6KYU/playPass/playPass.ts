// https://www.codewars.com/kata/559536379512a64472000053/train/typescript
export function playPass(s: string, n: number): string {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    let result: string = '';
    s.split('').forEach((char, i) => {
        if (char.match('^[0-9]')) {
            result += String(9 - Number(char));
        } else if (char.match('^[a-zA-z]')) {
            const indexChar = alphabet.indexOf(char.toLowerCase());
            const nextChar = alphabet[(indexChar+n) % alphabet.length];
            if (i % 2 !== 0) {
                result += nextChar.toLowerCase();
            } else {
                result += nextChar.toUpperCase();
            }
        } else {
            result += char;
        }
    })
    return result.split('').reverse().join('');
}


// alternative
// return s.toUpperCase()
// .split('')
// .map((v,i,a)=>{
//     if(/[0-9]/.test(v))  
//       return Math.abs(Number(v)-9);
//     if(/[A-Z]/.test(v)){
//       let x = String.fromCharCode((((v.charCodeAt(0)+n)-65) % 26)+65);
//       return i%2==1?x.toLowerCase():x;
//     }
//     return v;
// }).reverse()
// .join('');