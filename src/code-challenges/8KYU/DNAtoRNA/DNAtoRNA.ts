export function DNAtoRNA(dna: string): string {
    let result: string = '';
    for (let i = 0; i < dna.length; i++) {
        dna[i] === 'T' ? result += 'U' : result += dna[i];
    }
    return result;
}

//alternative
// return dna.replace(/T/g, 'U');

//alternative II
// return dna.split('').map( letter => letter === 'T' ? 'U' : letter ).join('');

