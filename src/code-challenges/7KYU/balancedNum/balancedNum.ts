export const balancedNum = (number: number) => {
    let leftNums : number[] = [];
    let rightNums : number[] = [];
    const arr = number.toString().split('').map(num => parseInt(num))
    const length = number.toString().length;
    if (length < 3) {
        return 'Balanced';
    }
    if (length % 2 === 0) {
        leftNums = arr.slice(0, length/2-1)
        rightNums = arr.slice(length/2+1)
    } else {
        leftNums = arr.slice(0, length/2)
        rightNums = arr.slice(length/2+1)         
    }
    
    return leftNums.reduce((acc, curr) => acc + curr) === 
            rightNums.reduce((acc, curr) => acc + curr) 
            ? 'Balanced' 
            : 'Not Balanced';
}
