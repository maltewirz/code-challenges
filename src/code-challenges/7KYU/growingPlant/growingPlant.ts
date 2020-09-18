export function growingPlant(up: number, down: number, h: number): number {
    let height = 0;
    for (let i = 1; height < h; i++) {
        height += up;
        if (height < h) {
            height -= down;
        }
        if (height >= h) {
            return i;
        }
    }
    return 0;
}


// export function growingPlant(up: number, down: number, h: number): number {
//     let hCache : number = 0;
//     let result : number = 0;
//     for (let i = 1; hCache < h; i++) {
//         hCache += up
//         if (hCache >= h) {
//             result = i;
//             break;
//         }
//         hCache -= down
//         if (hCache >= h) {
//             result = i;
//             break;
//         }
//         result = i;
//     }
//     return result
// }