export function generateShape(int: number): string {
    if (int === 1) {
        return '+';
    }
    let result: string = '';
    for (let j = 0; j < int; j++) {
        for (let i = 0; i < int; i++) {
            result += '+';
            if (i === int - 1 && j !== int-1) {
                result += '\n';
            }
        }
    }
    return result;
}

// alternative:

// export function generateShape(int: number): string {
//     return new Array(int).fill(new Array(int).fill('+').join('')).join('\n')
//   }