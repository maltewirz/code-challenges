// https://www.codewars.com/kata/526156943dfe7ce06200063e/train/typescript

export function brainLuck(code: string, input: string): string  {
    let dataPointer = 0;
    let instructionPointer = 0;
    let inputPointer = 0;
    const data : number[] = [];
    let output = "";

    const getByte = () => data[dataPointer] || 0;
    const setByte = (val: number) => data[dataPointer] = val;
    const getInput = () => input[inputPointer++].charCodeAt(0);
    const mutate = (fn: any) => data[dataPointer] = (fn(getByte()) + 256) % 256;
    // console.log(code, input);
    
    while (instructionPointer < code.length) {
        
        const instruction = code[instructionPointer];
        // console.log(instruction, data, dataPointer, data[dataPointer], 'output:',output);
        if (instruction === '>') {
            dataPointer++;
        }
        if (instruction === '<') {
            dataPointer--;
        }
        if (instruction === '+') {
            mutate((b: number) => b+1);
        }
        if (instruction === '-') {
            mutate((b: number) => b-1);
        }

        if (instruction === '.') {
            output += String.fromCharCode(getByte());
        }

        if (instruction === ',') {
            setByte(getInput());
        }

        if (instruction === '[') {
            if (getByte() === 0) {
                let nesting = 1;
                while (nesting > 0) {
                    instructionPointer++;
                    if (code[instructionPointer] === ']') {
                        nesting--;
                    } else if (code[instructionPointer] === '[') {
                        nesting++;
                    }
                } 
            }
        }

        if (instruction === ']') {
            if (getByte() !== 0) {
                let nesting = 1;
                while (nesting > 0) {
                    instructionPointer--;
                    if (code[instructionPointer] === '[') {
                        nesting--;
                    } else if (code[instructionPointer] === ']') {
                        nesting++;
                    }
                } 
            }
        }

        instructionPointer++;
    }
    
    
    return output;
}