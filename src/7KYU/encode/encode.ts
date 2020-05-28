let alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

export function encode(str: string, n: number): number[] {
    let map: Record <string, number> = {};
    let result: number[] = [];
    alphabet.split('').forEach((char, index) => {
        map[char] = index + 1;
    });
    str.split('').forEach(char => {
        result.push(map[char]);
    })
    result.forEach((num, index) => {
        let nArr = String(n).split('')
        let searchIndex = index;
        while (searchIndex > nArr.length - 1) {
            searchIndex -= nArr.length;
        }
        result[index] += Number(nArr[searchIndex]);
    })
    return result;
}

//alternative
// export function encode ( str:String, n:number):number[] {
//     let digits = n.toString().split('').map( ch => Number(ch) );
//     return str.split('').map((ch,index) => ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1 + digits[index % digits.length]);
//    }