// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/typescript

export function productFib(prod: number): Array<boolean|number> {
    const fibo = [];
    fibo[0] = 0;
    fibo[1] = 1;
    
    for (let i = 2; i <= prod; i++) {
        fibo[i] = fibo[i - 2] + fibo[i -1]
        if (fibo[i] * fibo[i-1] === prod) {            
            return [fibo[i-1], fibo[i], true]
        } else if (fibo[i] * fibo[i-1] > prod) {
            return [fibo[i-1], fibo[i], false]
        }
        
    }
    return [0, 0, false]
}
