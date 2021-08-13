// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/typescript

export function decipherThis(str: string): string {    
    let words = str.split(' ');
    let result: string[] = [];
    words.forEach(word => {
        const chars = word.split('');
        let number = '';
        chars.forEach(char => {
            if (!isNaN(char as any)) {
                number += char;
            }
        })
        const charString = String.fromCharCode(Number(number));
        word = word.slice(number.split('').length); // remove num
        word = charString + word ;
        const stringStart = word.slice(0,1);
        if (word.length >= 3) {
            const stringStartSecond = word.slice(word.length-1, word.length);
            const stringMiddle = word.slice(2,word.length-1);
            const stringNewEnd = word.slice(1,2);
            result.push(stringStart + stringStartSecond + stringMiddle + stringNewEnd);
        } else {
            result.push(word)
        };
    })
    return result.join(' ');
}

// alternative
// export function decipherThis(str: string): string {    
//     return str.split(' ').map(word => {
//         const asciiCode = parseInt(word);
//         const asciiCodeDigits = asciiCode.toString().length;
//         const newWord = String.fromCharCode(asciiCode) + word.substr(asciiCodeDigits);
        
//         if (newWord.length <= 2) {
//             return newWord;
//         } else {
//             return newWord[0] + newWord[newWord.length-1] + newWord.substring(2, newWord.length-1) + newWord[1];
//         }
//     }).join(' ');
// }