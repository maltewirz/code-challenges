export function findLongest(array: number[]):number {
    let highestLength = 0;
    let result = 0;
    array.forEach(val => {
        const length = val.toString().length        
        if (length > highestLength) {
            highestLength = length;
        }
    })
    for (let i = 0; i < array.length; i++) {
        const length = array[i].toString().length;
        if (length === highestLength) {
            result = array[i];
            break;
        }
    }
    return result;
}

// alternative 
// return array
// .reduce( (a,b) => a.toString().length < b.toString().length ? b : a);