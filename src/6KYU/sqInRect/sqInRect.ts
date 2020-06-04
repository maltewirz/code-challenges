export function sqInRect(l: number, w: number): number[] {
    let result: number[] = [];
    if (l === w) {
        return null;
    }
    
    // loop while we still have rectangles, not yet squares
    while (l !== w) {
        // if longer than wide, subtract width from length and add width to result arr 
        if (l > w) {
            l -= w;
            result.push(w);
        // if wider than long, subtract width from length and add length to result arr 
        } else if (w > l) {
            w -= l;
            result.push(l);
        }
    }
    // add the last remaining suqare to the result
    result.push(l);
    return result;
}

// Example flow
// while loop: 5 length and 3 wide
// 2 length = 5 length - 3 wide
// push 3 wide to result
// while loop: 2 !== 3
// 1 width = 3 width - 2 length
// push 2 length to result
// while loop: 2 !== 1
// 1 length = 2 length - 1 width
// push 1 length to result
// -- while loop is complete
// add last length to result and return
