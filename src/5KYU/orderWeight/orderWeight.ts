// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/typescript

export function orderWeight(str: string):string {
    const arr: number[] = [];
    str.split(' ').forEach(number => {
        if (number !== '') {  
            arr.push(Number(number));
        }
    })

    return arr.sort((a,b) => {        
        let valueA = 0;
        let valueB = 0;
        String(a).split('').forEach(strChar => {
            valueA += Number(strChar);
        });
        String(b).split('').forEach(strChar => {
            valueB += Number(strChar);
        });
        
        return valueA  === valueB ? String(a).localeCompare(String(b)) : valueA - valueB;
    }).join(' ');
}

// alternative
// function orderWeight(strng) {
//     var weights = strng.split(' ');

//     weights.sort(function(a, b) {
//       var aSum = getSum(a);
//       var bSum = getSum(b);
//       return aSum === bSum ? a.localeCompare(b) : aSum - bSum;
//     });
//     return weights.join(" ");
// }


// function getSum(str) {
//   return str.split('').reduce(function(sum, next) {
//     return sum + Number(next);
//   }, 0);
// }
