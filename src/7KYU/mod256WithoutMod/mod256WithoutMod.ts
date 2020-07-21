export function mod256WithoutMod(n: number): number {
    const divisor = 256;
    if(n > 0) {
        return n - Math.floor(n / divisor) * divisor
      } else {
        return n - Math.ceil(n / divisor) * divisor
      }
}

// alternative
// return n > 0 ? (n & 255) : -(-n & 255);
