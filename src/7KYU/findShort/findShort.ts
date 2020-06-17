// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/
export function findShort(s: string): number | undefined {
    let shortest: number | undefined = undefined;
    s.split(' ').forEach(word => {
        if (shortest === undefined) {
            shortest = word.length;
        } else {
            if (word.length < shortest) {
                shortest = word.length;
            }
        }
    })
    return shortest;
}


// alternative 
// export function findShort(s: string): number {
//     return Math.min(...s.split(" ").map((w) => w.length));
//   }