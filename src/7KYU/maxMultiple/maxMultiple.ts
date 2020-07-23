// https://www.codewars.com/kata/5aba780a6a176b029800041c/

export function maxMultiple(divisior: number, bound: number) {
    for (let i = bound; i > 0; i --) {
        if (i % divisior === 0) {
            return i;
        }        
    }
}