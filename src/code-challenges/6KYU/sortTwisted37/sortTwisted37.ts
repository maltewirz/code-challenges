// https://www.codewars.com/kata/58068479c27998b11900056e/solutions/typescript

export function sortTwisted37(array:number[]):number[] {

    function twister(array:number[]):number[] {
        return array.map(number => {
            return Number(number.toString().split('').map(char => {
                if (char === '3') {
                    char = '7';
                } else if (char === '7') {
                    char = '3';
                } 
                return char;
            }).join(''));
        })
    }

    const realArr = twister(array);
    const sortedRealArr = realArr.sort((a,b) => a - b);
    const twistedArr = twister(sortedRealArr);
    return twistedArr;
}

