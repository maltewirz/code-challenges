export function feast(beast:string, dish:string): boolean {
    return (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1])
}

//alternative
// return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
