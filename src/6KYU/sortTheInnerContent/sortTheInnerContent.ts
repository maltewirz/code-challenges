// https://www.codewars.com/kata/5898b4b71d298e51b600014b/
export function sortTheInnerContent(words: string): string {
    return words.split(' ').map(word => {
        let wordArr = word.split('');
        const firstLetter = wordArr.shift();
        let lastLetter: string | undefined = ''
        if (wordArr.length > 1) {
            lastLetter = wordArr.pop()
        }
        wordArr.sort().reverse();
        return firstLetter + wordArr.join('') + lastLetter;
    }).join(' ');
}

// alternative
// export function sortTheInnerContent(w:string):string {
//     return w.split(' ').map((x,i, arr) => 
//         (x.length < 2) ? x : arr[i][0] + x.slice(1,-1).split('').sort().reverse().join('') + arr[i].slice(-1)
//     ).join(' ');
//   }