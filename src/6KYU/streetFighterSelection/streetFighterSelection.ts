export function streetFighterSelection(fighters: string[][], position: number[], moves: string[]) {
    let x: number = position[1];
    let y: number = position[0];
    const arrWidth: number = fighters[0].length;
    let result: string[] = [];
    moves.forEach(move => {
        if (move === 'up') {
            y = 0;
        }
        if (move === 'down') {
            y = 1;
        }
        if (move === 'right') {
            x = (x + 1) % arrWidth;
        }
        if (move === 'left') {            
            x = (x - 1 + arrWidth) % arrWidth
        }
        result.push(fighters[y][x]);
    });
    return result;
}