export const encryptThis = (str: string): string => {
    return str.split(' ').map(word => {
        if (word.length === 0) {
            return '';
        }
        let result = '';
        let arr = word.split('');
        result += word.charCodeAt(0)
        arr.shift()
        if (word.length >= 3) {
            result += arr.pop() // adding last letter
            const secondLetter = arr.shift();
            result += arr.join('')// adding middle of word
            result += secondLetter
        } else if (word.length === 2) {
            result += arr[0]
        }
        return result
    }).join(' ')    
}

// alternative
// export let encryptThis = (str: string): string => {
//     if (!str)
//       return '';
//     return str
//       .split(' ')
//       .map((word) => {
//           let first = word[0];
//           let second = (word.length > 1) ? word[1] : '';
//           let middle = word.slice(2, -1);
//           let last = (word.length > 2) ? word[word.length - 1] : '';
//           return first.charCodeAt(0) + last + middle + second;
//       })
//       .join(' ');
// };