export const jumpingNumber = (n: number): string => {
    let arr: number[] = String(n).split('')
        .map(num => Number(num))

    if (arr.length === 1) {
        return 'Jumping!!'
    }
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] - arr[i+1] !== 1 && arr[i+1] - arr[i] !== 1) {
            return 'Not!!'
        }
    }
    return 'Jumping!!'
}