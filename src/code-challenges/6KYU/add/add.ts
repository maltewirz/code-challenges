export function add(x: number,y: number): number {
    return (y === 0 ? x : add(x^y, (x&y) << 1))
}

// Bitwise operator: << moves x in binary representation y (<32)
// bits to the left, from the right it is filled with 0s

// Bitwise operator: ^ means XOR