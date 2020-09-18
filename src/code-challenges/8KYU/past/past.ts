export const past = (h: number, m: number, s: number): number => {
    h ? h = h * 60 * 60 * 1000 : 0;
    m ? m = m * 60 * 1000 : 0;
    s ? s = s * 1000 : 0;    
    return h + s + m;
}

// Alternative:
// const seconds = (s: number) => s * 1000;
// const minutes = (m: number) => m * seconds(60);
// const hours = (h: number) => h * minutes(60);

// export function past(h: number, m: number, s: number): number {
//   return hours(h) + minutes(m) + seconds(s);
// }